import React from "react";
import CommentContainer from '../comments/comment_container'
import { Link } from 'react-router-dom';
import { updateWorkout } from "../../actions/workout_actions";

class WorkoutShow extends React.Component {
    constructor(props) {
      // debugger
        super(props)
        this.state = {
          load: false,
          comment: {
            username: this.props.currentUser.username,
            comment: ""
          },
          // comments: props.workout.comments
          // comments: props.workout ? props.workout.comments : "null"
        }

        this.handleComment = this.handleComment.bind(this)
    }
    
    async componentDidMount() {
        await this.props.fetchUserExercises(this.props.currentUser.id)
        await this.props.fetchWorkout(this.props.match.params.workoutId)
        this.setState({
          load: true
        })
    }

  handleEdit(e) {
    e.preventDefault();
    this.setState({ edit: true });
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleCancel(e) {
    e.preventDefault();
    this.setState({
      text: this.props.comment.text,
      edit: false,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let comment = this.props.comment;
    comment.text = this.state.text;
    this.props
      .updateComment(comment)
      .then(() => this.setState({ edit: false }))
      .then(() => this.props.fetchWorkoutComments(this.props.workoutId));
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteComment(this.props.comment.id);
  }
    
  handleComment(e) {
    e.preventDefault();
    // debugger
      // this.state.comments.push(this.state.comment)
      // this.props.workout.comments = this.state.comments
      const comments = this.props.workout.comments;
      comments.push(this.state.comment);
      const workout = this.props.workout;
      workout.comments = comments;
      // debugger
      this.props.updateWorkout(workout)
        .then(() => this.setState( {comment: ""} ))
  }

    render() {
      // debugger
      // const { comment, user } = this.props;

      // let buttons;
      // if (user.id === comment.user.id && this.state.edit === false) {
      //   buttons = (
      //     <div className="workout-show-page-comment-buttons">
      //       <button className="comment-button" onClick={this.handleEdit}>
      //         Edit
      //           </button>
      //       &nbsp;
      //           <button className="comment-button" onClick={this.handleDelete}>
      //         Delete
      //           </button>
      //     </div>
      //   );
      // } else if (user.id === comment.user._id && this.state.edit === true) {
      //   buttons = (
      //     <div className="workout-show-page-comment-buttons">
      //       <button className="comment-button" onClick={this.handleCancel}>
      //         Cancel
      //       </button>
      //       &nbsp;
      //       <button className="comment-button" onClick={this.handleSubmit}>
      //         Save
      //       </button>
      //     </div>
      //   );
      // }

      const { workout, exercises } = this.props
      // if (!workout || !exercises) {
      //     return null
      // }
      if (!this.state.load) {
        return null
      }
      return (
        <div id="workout-show">
          <div className="workout-title">{workout.title}</div>
          <div className="workout-show-container">
            <div className="workout-exercise-title">
              <ul>
                {workout.exercises.map((exerciseId) => {
                  if (!this.props.exercises[exerciseId]) {
                    return null;
                  } else {
                    return (
                      <li className="exercise-element">
                        {exercises[exerciseId].title}
                        <div className="exercise-img">
                          <div
                            className={`exercise-img-${exercises[
                              exerciseId
                            ].category.toLowerCase()}`}
                          />
                        </div>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
            <div className="workout-notes">
              <div className="workout-notes-header">Notes:</div>
              <br />
              {workout.notes}
            </div>
          </div>
          <div className="comments-container">
            <CommentContainer workoutId={this.props.match.params.workoutId}/>

          </div>
        </div>
        );
      }
    }

export default WorkoutShow;