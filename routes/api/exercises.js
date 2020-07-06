const express = require("express");
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');
const Exercise = require('../../models/Exercise')
const validateExerciseInput = require('../../validation/exercises');

router.get("/test", (req, res) => res.json({ msg: "This is the exercises route" }));

router.post('/new', 
    passport.authenticate("jwt", {session: false}),
    (req, res) => {
        const { errors, isValid } = validateExerciseInput(req.body);
    
        if (!isValid) {
            return res.status(400).json(errors);
        } 

        const newExercise = new Exercise({
            title: req.body.title,
            category: req.body.category,
            notes: req.body.notes,
            equipment: req.body.equipment
        })

    
        newExercise.save()
            .then(exercise => res.json(exercise))
            .catch(err => console.log(err))
    }
)

module.exports = router;