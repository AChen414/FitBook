const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema ({
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    equipment: {
        type: String,
        required: false
    },
    notes: {
        type: String,
        required: false
    }
});

const Exercise = mongoose.model('Exercise', ExerciseSchema);

module.exports = Exercise
