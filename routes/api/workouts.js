const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Workout = require('../../models/Workout');
const validateWorkoutInput = require('../../validation/workouts');

router.get('/user/:user_id', (req, res) => {
    Workout.find({ user: req.params.user_id })
        .then(workouts => res.json(workouts))
        .catch(err => res.status(404).json({ noworkoutsfound: 'No workouts found from that user'}));
})

router.get('/:id', (req, res) => {
    Workout.findById(req.params.id)
        .then(workout => res.json(workout))
        .catch(err => res.status(404).json({ noworkoutfound: 'No workout found with that ID'}))
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

router.patch('/:id',
    passport.authenticate('jwt', {session: false}),
    async (req, res) => {
        const { errors, isValid } = validateWorkoutInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors)
        }

        const workout = await Workout.findById(req.params.id)

        if (req.user.id !== workout.user.toString()) { 
            return res.status(400).json({ invaliduser: 'Cannot update a workout you did not create'})   // checks that the workout owner is the logged in user
        }

        Workout.findByIdAndUpdate(req.params.id, req.body, { returnOriginal: false, new: true })
            .then(workout => res.json(workout))
            .catch(err => res.status(404).json({ noworkoutfound: 'No workout found with that ID'})); 
    }
)

router.delete('/:id', 
    passport.authenticate('jwt', {session: false}),
    async (req, res) => {

        const workout = await Workout.findById(req.params.id)

        if (req.user.id !== workout.user.toString()) {
            return res.status(400).json({ invaliduser: 'Cannot delete a workout you did not create'})
        }

        Workout.findByIdAndDelete(req.params.id) 
            .then(workout => res.json(workout))
    }
)

module.exports = router;