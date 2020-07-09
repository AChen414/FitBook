const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Exercise = require('../../models/Exercise');
const validateExerciseInput = require('../../validation/exercises');

mongoose.set('useFindAndModify', false); // this line addresses the depracation warning for Model.findByIdAndUpdate

router.get('/', (req, res) => {
    Exercise.find()
        .sort({ category: 1 })
        .then(exercises => {
            const packagez = {}

            exercises.forEach(exercise => {
                packagez[exercise._doc._id.toString()] = {
                    _id: exercise._doc._id.toString(),
                    user: exercise._doc.user.toString(),
                    title: exercise._doc.title,
                    category: exercise._doc.category,
                    equipment: exercise._doc.equipment,
                    notes: exercise._doc.notes
                }
            })
            res.json(packagez)
        })
        .catch(err => res.status(404).json({ noexercisesfound: 'No exercises found' }));
});

router.get('/user/:user_id', (req, res) => {
    Exercise.find({ user: req.params.user_id })
        .then(exercises => {
            const packagez = {}

            exercises.forEach(exercise => {
                packagez[exercise._doc._id.toString()] = {
                    _id: exercise._doc._id.toString(),
                    user: exercise._doc.user.toString(),
                    title: exercise._doc.title,
                    category: exercise._doc.category,
                    equipment: exercise._doc.equipment,
                    notes: exercise._doc.notes
                };
            });
            res.json(packagez)
        })
        .catch(err => res.status(404).json({ noexercisesfound: 'No exercises found from that user' }));
});

router.get('/:id', (req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => {
            let result = {
                _id: exercise._doc._id.toString(),
                user: exercise._doc.user.toString(),
                title: exercise._doc.title,
                category: exercise._doc.category,
                equipment: exercise._doc.equipment,
                notes: exercise._doc.notes
            }
            
            res.json(result)
        })
        .catch(err => res.status(404).json({ noexercisefound: 'No exercise found with that ID' }));
});

router.post('/', 
    passport.authenticate('jwt', {session: false}),
    (req, res) => {
        const { errors, isValid } = validateExerciseInput(req.body);
    
        if (!isValid) {
            return res.status(400).json(errors);
        };

        const newExercise = new Exercise({
            user: req.user.id,
            title: req.body.title,
            category: req.body.category,
            notes: req.body.notes,
            equipment: req.body.equipment
        });
        debugger
        newExercise.save()
            .then(exercise => {
                debugger;
                const result = {
                    _id: exercise._doc._id.toString(),
                    user: exercise._doc.user.toString(),
                    title: exercise._doc.title,
                    category: exercise._doc.category,
                    equipment: exercise._doc.equipment,
                    notes: exercise._doc.notes
                }
                res.json(result)
            })
            .catch(err => console.log(err));
    }
);

router.patch('/:id',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        const { errors, isValid } = validateExerciseInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        };

        const exercise = await Exercise.findById(req.params.id)

        if (req.user.id !== exercise.user.toString()) {
            // debugger;
            return res.status(400).json( { invaliduser: 'Cannot update an exercise you did not create' } )
        };

        Exercise.findByIdAndUpdate(req.params.id, req.body, { returnOriginal: false, new: true })
            .then(exercise => {
                const result = {
                    _id: exercise._doc._id.toString(),
                    user: exercise._doc.user.toString(),
                    title: exercise._doc.title,
                    category: exercise._doc.category,
                    equipment: exercise._doc.equipment,
                    notes: exercise._doc.notes
                }
                res.json(result)
            })
            .catch(err => res.status(404).json({ noexercisefound: 'No exercise found with that ID' }));
    }
);

router.delete('/:id',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        const exercise = await Exercise.findById(req.params.id)

        if (req.user.id !== exercise.user.toString()) {
            // debugger;
            return res.status(400).json({ invaliduser: 'Cannot delete an exercise you did not create' })
        };

        Exercise.findByIdAndDelete(req.params.id)
            .then(exercise => res.json(exercise))
            .catch(err => res.status(404).json({ noexercisefound: 'No exercise found with that ID' }));
    }
);

module.exports = router;