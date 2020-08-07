import * as CommentAPIUtil from "../util/comment_api_util";
import {getWorkoutComments} from "../util/comment_api_util"

export const RECEIVE_WORKOUT_COMMENTS = "RECEIVE_WORKOUT_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

const receiveWorkoutComments = (comments) => ({
  type: RECEIVE_WORKOUT_COMMENTS,
  comments,
});

const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment,
});

const receiveErrors = (errors) => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors,
});

const removeComment = (commentId) => ({
  type: REMOVE_COMMENT,
  commentId,
});

export const fetchWorkoutComments = (workoutId) => (dispatch) => {
  debugger
  return getWorkoutComments(workoutId)
    .then(
    comments => dispatch(receiveWorkoutComments(comments.data)),
    err => dispatch(receiveErrors(err.response.data))
    )
    }


export const createComment = (workoutId, comment) => dispatch => (
    CommentAPIUtil.createComment(workoutId, comment)
    .then(
        comment => dispatch(receiveComment(comment.data)),
        err => dispatch(receiveErrors(err.response.data))
    )
)

export const updateComment = (workoutId, comment) => (dispatch) =>(
    CommentAPIUtil.updateComment(workoutId, comment)
    .then(
        comment => dispatch(receiveComment(comment.data)),
        err => dispatch(receiveErrors(err.response.data))
    )
);

export const deleteComment = (workoutId, commentId) => (dispatch) => (
        CommentAPIUtil.deleteComment(workoutId, commentId)
        .then(
            () => dispatch(removeComment(commentId)),
            err => dispatch(receiveErrors(err.responseJSON))
        )
)