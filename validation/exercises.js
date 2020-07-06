const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateExerciseInput(data) {
    let errors = {};

    data.title = validText(data.title) ? data.title : '';
    data.category = validText(data.category) ? data.category : '';
    data.equipment = validText(data.equipment) ? data.equipment : ''; // ?
    data.notes = validText(data.notes) ? data.notes : '';

    if (Validator.isEmpty(data.title)) {
        errors.title =  'Title cannot be empty';
    }

    if (Validator.isEmpty(data.category)) {
        errors.category =  'Category cannot be empty';
    }

    if (!Validator.isLength(data.notes, { min: 0, max: 140 })) {
        errors.notes = 'Notes cannot be more than 140 characters';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};