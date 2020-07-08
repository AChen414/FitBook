import {
    RECEIVE_EXERCISES,
    RECEIVE_USER_EXERCISES,
    RECEIVE_NEW_EXERCISE
} from '../actions/exercise_actions';

const ExercisesReducer = (state = { all: {}, user: {}, new: undefined}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_EXERCISES:
            newState.all = action.exercises.data;
            return newState;
        case RECEIVE_USER_EXERCISES:
            newState.user = action.exercises.data;
            return newState;
        case RECEIVE_NEW_EXERCISE:
            newState.new = action.tweet.data;
            return newState;
        default:
            return state;
    }
}

export default ExercisesReducer;