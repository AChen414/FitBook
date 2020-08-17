import {
    RECEIVE_USER_WORKOUTS,
    RECEIVE_WORKOUT,
    REMOVE_WORKOUT,
  RECEIVE_ALL_WORKOUTS,
} from '../actions/workout_actions';

const workoutsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
      case RECEIVE_ALL_WORKOUTS:
        return action.workouts;
      case RECEIVE_USER_WORKOUTS:
        return action.workouts;
      case RECEIVE_WORKOUT:
        newState[action.workout._id] = action.workout;
        return newState;
      case REMOVE_WORKOUT:
        delete newState[action.workoutId];
        return newState;
      default:
        return state;
    }
}

export default workoutsReducer;