const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: false
    },
    exercises: [{
        type: Schema.Types.ObjectId,
        ref: 'Exercise'
    }]
});

module.exports = Workout = mongoose.model('Workout', WorkoutSchema);