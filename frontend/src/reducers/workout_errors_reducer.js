import * as WorkoutActions from '../actions/workout_actions';

const workoutErrorsReducer = (state=[], action) => {
    Object.freeze(state);

    switch (action.type) {
        case WorkoutActions.RECEIVE_ALL_WORKOUTS:
            return [];
        case WorkoutActions.RECEIVE_WORKOUT_ERRORS:
            return action.errors
        case WorkoutActions.RECEIVE_USER_WORKOUTS:
            return [];
        case WorkoutActions.RECEIVE_WORKOUT:
            return [];
        case WorkoutActions.REMOVE_WORKOUT:
            return [];
        default: 
            return state;
    };
};

export default workoutErrorsReducer;