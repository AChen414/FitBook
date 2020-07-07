const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateWorkoutInput(data) {
    let errors = {};

    data.title = validText(data.title) ? data.title : '';
    data.notes = validText(data.notes) ? data.notes : '';

    if (Validator.isEmpty(data.title)) {
        errors.title = 'Title cannot be empty';
    }

    if (!Validator.isLength(data.notes, { min: 0, max: 140 })) {
        errors.notes = 'Notes cannot be more than 140 character';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};