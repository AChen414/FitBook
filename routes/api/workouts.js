const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Workout = require('../../models/Workout');
const validateWorkoutInput = require('../../validation/workouts');

router.get("/test", (req, res) => res.json({ msg: "This is the workouts route" }));

router.get('/user/:user_id', (req, res) => {
    Workout.find({ user: req.params.user_id })
        .then(workouts => res.json(workouts))
        .catch(err => res.status(404).json({ noworkoutsfound: 'No workouts found from that user'}));
})

router.get('/:id', (req, res) => {
    Workout.findById(req.params.id)
        .then(workout => res.json(workout))
        .catch(err => res.status(404).json({ noexercisefound: 'No exercise found with that ID'}))
})

router.post('/', 
    passport.authenticate('jwt', {session: false}),
    (req, res) => {
        const { errors, isValid } = validateWorkoutInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newWorkout = new Workout({
            user: req.user.id,
            title: req.body.title,
            notes: req.body.notes,
            exercises: req.body.exercises
        })

        newWorkout.save()
            .then(exercise => res.json(exercise))
            .catch(err => console.log(err));
    }
)

module.exports = router;