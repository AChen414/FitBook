import {
    RECEIVE_USER_WORKOUTS,
    RECEIVE_WORKOUT,
    REMOVE_WORKOUT
} from '../actions/workout_actions';
import {
  RECEIVE_WORKOUT_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT,
} from "../actions/comment_actions";

const workoutsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
      case RECEIVE_USER_WORKOUTS:
        return action.workouts;
      case RECEIVE_WORKOUT:
        newState[action.workout._id] = action.workout;
        return newState;
      case REMOVE_WORKOUT:
        delete newState[action.workoutId];
        return newState;
      case RECEIVE_WORKOUT_COMMENTS:
        newState = {};
        action.comments.forEach((comment) => {
          newState[comment._id] = comment;
        });
        return newState;
      case RECEIVE_COMMENT:
        newState[action.comment._id] = action.comment;
        return newState;
      case REMOVE_COMMENT:
        delete newState[action.commentId];
        return newState;
      default:
        return state;
    }
}

export default workoutsReducer;