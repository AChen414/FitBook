const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Comment = require('../../models/Comment');
const validateComment = require('../../validation/comments');

router.get("/workout/:workout_id/", (req, res) => {
  Comment.find({ workout: req.params.workout_id })
    .populate("user")
    .sort({ date: -1 })
    .then((comments) => res.json(comments))
    .catch((err) =>
      res
        .status(404)
        .json({ nocommentsfound: "No comments found from that workout" })
    );
});

//comment create
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { isValid, errors } = validateComment(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newComment = new Comment({
      text: req.body.text,
      workout: req.body.workoutId,
      user: req.user.id,
    });

    newComment
      .save()
      .then((comment) => res.json(comment))
      .catch((err) => res.status(400).json(err));
  }
);

//comment edit
router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Comment.findById(req.params.id)
      .then((comment) => {
        // use != because user.id is string and comment.user is object
        if (req.user.id != comment.user) {
          res.status(403).json("Cannot edit comment!");
        } else {
          comment.text = req.body.text;
          comment
            .save()
            .then((comment) => res.json(comment))
            .catch((err) => res.status(400).json(err));
        }
      })
      .catch((err) => res.status(400).json(err));
  }
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Comment.findById(req.params.id)
      .then((comment) => {
        // use != because user.id is string and comment.user is object
        if (req.user.id != comment.user) {
          res.status(403).json("Cannot delete comment!");
        } else {
          Comment.deleteOne({ _id: req.params.id })
            .then(() => res.json("Successfully deleted comment."))
            .catch((err) => res.status(400).json(err));
        }
      })
      .catch((err) => res.status(400).json(err));
  }
);

module.exports = router;