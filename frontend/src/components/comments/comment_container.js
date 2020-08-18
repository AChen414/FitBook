import { connect } from "react-redux";
import workoutComments from "./workout_comments";
import {
  fetchWorkoutComments,
  createComment,
  updateComment,
  deleteComment,
} from "../../actions/comment_actions";

const mapStateToProps = (state, ownProps) => {
  // debugger
  return ({
    comments: Object.values(state.entities.comments),
    workoutId: ownProps.workoutId,
    user: state.session.user,
  })
  };

const mapDispatchToProps = (dispatch) => ({
  fetchWorkoutComments: (workoutId) => dispatch(fetchWorkoutComments(workoutId)),
  deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  createComment: (comment) => dispatch(createComment(comment)),
  updateComment: (comment) => dispatch(updateComment(comment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(workoutComments);
