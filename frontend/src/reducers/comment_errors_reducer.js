import * as CommentActions from "../actions/comment_actions";

const commentErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch(action.type) {
        case CommentActions.RECEIVE_COMMENT_ERRORS:
            return action.errors 
        case CommentActions.RECEIVE_WORKOUT_COMMENTS:
            return [];
        case CommentActions.RECEIVE_COMMENT:
            return [];
        case CommentActions.REMOVE_COMMENT:
            return [];
        default:
            return state;
    };
};

export default commentErrorsReducer;