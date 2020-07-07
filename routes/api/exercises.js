const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Exercise = require('../../models/Exercise')
const validateExerciseInput = require('../../validation/exercises');

router.get('/', (req, res) => {
    Exercise.find()
        .sort({ category })
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
        } 

        const newExercise = new Exercise({
            user: req.user.id,
            title: req.body.title,
            category: req.body.category,
            notes: req.body.notes,
            equipment: req.body.equipment
        })
        
        newExercise.save()
            .then(exercise => res.json(exercise))
            .catch(err => console.log(err));
    }
);

module.exports = router;