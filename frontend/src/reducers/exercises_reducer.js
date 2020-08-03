import {
    RECEIVE_EXERCISES,
    RECEIVE_USER_EXERCISES,
    RECEIVE_EXERCISE,
    REMOVE_EXERCISE
} from '../actions/exercise_actions';

const ExercisesReducer = (state = { all: {}, user: {} }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_EXERCISES:
            newState.all = action.exercises;
            return newState
        case RECEIVE_USER_EXERCISES:
            newState.user = action.exercises;
            return newState;
        case RECEIVE_EXERCISE:
            newState.all[action.exercise._id] = action.exercise;
            return newState;
        case REMOVE_EXERCISE:
            delete newState.all[action.exerciseId]
            return newState;
        default:
            return state;
    };
};

export default ExercisesReducer;