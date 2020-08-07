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
          comment: "",
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
            <div className="comment-container">
              {/* <CommentContainer workoutId={this.props.match.params.workoutId}/> */}
              <div className="create-comment-container">
                <h4>Want to share your thought of this workout?</h4>

                <input
                  className="comment-box"
                  type="textarea"
                  placeholder="Put your thought about this comment"
                  value={this.state.comment}
                  onChange={e => this.setState({comment: e.currentTarget.value})}
                />

                <button className="comment-button" onClick={this.handleComment}>
                  Submit
                </button>
              </div>
              {this.props.workout.comments}
            </div>
          </div>
        );
      }
    }

export default WorkoutShow;