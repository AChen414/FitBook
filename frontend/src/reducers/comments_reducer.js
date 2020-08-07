import {
  RECEIVE_WORKOUT_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comment_actions';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_WORKOUT_COMMENTS:
      newState = {};
      action.comments.forEach(comment => {
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

export default commentsReducer;