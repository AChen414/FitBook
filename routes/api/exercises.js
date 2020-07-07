const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Exercise = require('../../models/Exercise')
const validateExerciseInput = require('../../validation/exercises');

router.get('/', (req, res) => {
    Exercise.find()
        .sort({ category: 1 })
        .then(exercises => res.json(exercises))
        .catch(err => res.status(404).json({ noexercisesfound: 'No exercises found' }));
});

router.get('/user/:user_id', (req, res) => {
    Exercise.find({ user: req.params.user_id })
        .then(exercises => res.json(exercises))
        .catch(err => res.status(404).json({ noexercisesfound: 'No exercises found from that user' }));
});

router.get('/:id', (req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
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
        
        newExercise.save()
            .then(exercise => res.json(exercise))
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

        Exercise.findByIdAndUpdate(req.params.id, req.body, { returnOriginal: false, new: true })
            .then(exercise => res.json(exercise));

        // Exercise.findByIdAndUpdate(req.params.id, req.body, { returnOriginal: false }, (err, doc) => {
        //     if (err) {
        //         console.log("error")
        //     } else {
        //         console.log(doc)
        //     }
        // })
            // .then(result => console.log(result));

        // if (req.user.id !== exercise.user) {
        //     debugger
        //     return res.status(400).json({ exercise: `${exercise.user}`, user: req.user.id  })
        // };

        // const filter = { _id: req.params.id };
        // const update = req.body;

        // const updatedExercise = await Exercise.findOneAndUpdate(filter, update, { new: true })
        //     .then(() => console.log("success", updatedExercise));
    }
);

module.exports = router;