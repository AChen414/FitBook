import React from "react";
import Comment from "./comment";
import CreateComment from "./create_comment.jsx";

class WorkoutComments extends React.Component {
  componentDidMount() {
    this.props.fetchWorkoutComments(this.props.workoutId);
  }

  render() {
    const {
      comments,
      user,
      deleteComment,
      createComment,
      updateComment,
      fetchWorkoutComments,
      workoutId,
    } = this.props;

    const allComments = comments.map((comment) => (
      <Comment
        comment={comment}
        fetchWorkoutComments={fetchWorkoutComments}
        workoutId={workoutId}
        user={user}
        deleteComment={deleteComment}
        updateComment={updateComment}
        key={comment._id}
      />
    ));
    // if (comments.length === 0) {
    //   return (
    //     <p>No Comments yet!</p>
    //   )
    // } else {

    // }
    return (comments.length === 0) ? (
      <div className="comments">
        <p>No Comments yet!</p>
        <CreateComment
          user={user}
          createComment={createComment}
          fetchWorkoutComments={fetchWorkoutComments}
          workoutId={workoutId}
        />
      </div>  
    ) : (
      <div className="comments">
        <CreateComment
          user={user}
          createComment={createComment}
          fetchWorkoutComments={fetchWorkoutComments}
          workoutId={workoutId}
        />

        {allComments}
      </div>
    );
  }
};

export default WorkoutComments;
