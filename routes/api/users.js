const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

const aws = require("aws-sdk");
const multerS3 = require("multer-s3");
const multer = require("multer");
const path = require("path");
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const defaultExercises = require('../../models/default_exercises');

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        id: req.user.id,
        username: req.user.username,
        email: req.user.email
    });
})


router.post("/register", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ username: req.body.username }).then(user => {
        if (user) {
            errors.username = "User already exists";
            return res.status(400).json(errors);
        } else {
            const newUser = new User({
              username: req.body.username,
              email: req.body.email,
              password: req.body.password,
              profilePhotoLink:
                "https://cdn.onlinewebfonts.com/svg/img_568657.png",
            });
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => {
                            const payload = { id: user.id, username: user.username };

                            jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer " + token
                                });
                            });

                            defaultExercises.forEach((exercise) => {
                                exercise.user = user.id;
                                exercise.save();
                            })

                        })
                        .catch(err => console.log(err));
                });
            });
        }
    });
});

router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email }).then(user => {
        if (!user) {
            errors.email = "This user does not exist";
            return res.status(400).json(errors);
        }

        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                const payload = { id: user.id, email: user.email, username: user.username };

                jwt.sign(payload, keys.secretOrKey, { expiresIn: '7d' }, (err, token) => {
                    res.json({
                        success: true,
                        token: "Bearer " + token
                    });
                });
            } else {
                errors.password = "Incorrect password";
                return res.status(400).json(errors);
            }
        });
    });
});


router.get("/profile/:id", (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(user => {
            if (!user) {
                return res.status(404).json({ email: 'This user does not exist!' })
            } else {
                return res.json(user);
            }
        })
})


//aws img upload

router.post("/:id/profile-img", upload.single("file"), (req,res) => {
    console.log('requestOkokok', req.file);

    User.findOne({ _id: req.params.id})
        .then( user => {
            if (!user) {
                return res.status(404).json({ user: 'This user does not exist!' })
            } else {
                const file = req.file;

                // const s3FileURL = process.env.AWS_Uploaded_File_URL_LINK;

                let s3 = new aws.S3({
                    accessKeyId: keys.accessKeyId,
                    secretAccessKey: keys.secretAccessKey,
                    Bucket: keys.Bucket,
                });

                var params = { 
                    Bucket: "fit-book-bucket",
                    Key: file.originalname,
                    Body: file.buffer,
                    ContentType: file.mimetype,
                    ACL: "public-read"
                };

                s3.upload(params, (err,data) => {
                    if (err) {
                        res.status(500).json({ error: true, Message: error });
                    } else {
                        photolink = `https://${params.Bucket}.s3.amazonaws.com/${params.Key}`;
                        user.profilePhotoLink = photolink;
                        user.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    }
                })
            }
        })
})

// router.patch("/:id/calendar", (req, res) => {
//     debugger
//     User.findByIdAndUpdate(req.params.id, req.body, { returnOriginal: false, new: true })
//         .then(user => {
//             const result = {
//                 calendarData: user._doc.calendarData
//             };
//             res.json(result)    
//         })
//         .catch(err => res.status(404).json({ noworkoutfound: 'No user found with that ID'}));
//     }       
// )

router.patch('/:id/calendar',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        // const { errors, isValid } = validateWorkoutInput(req.body);

        // if (!isValid) {
        //     return res.status(400).json(errors)
        // }

        // const user = await User.findById(req.params.id)

        // if (req.user.id !== workout.user.toString()) {
        //     return res.status(400).json({ invaliduser: 'Cannot update a workout you did not create' })   // checks that the workout owner is the logged in user
        // }

        User.findByIdAndUpdate(req.params.id, req.body, { returnOriginal: false, new: true })
            .then(user => {
                const result = {
                    _id: user._doc._id.toString(),
                    username: user._doc.username,
                    email: user._doc.email,
                    profilePhotoKey: user._doc.profilePhotoKey,
                    calendarData: user._doc.calendarData
                };
                res.json(result)
            })
            // .catch(err => res.status(404).json({ noworkoutfound: 'No workout found with that ID' }));
    }
)

module.exports = router;