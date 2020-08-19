import React from "react";
import CommentContainer from '../comments/comment_container'

class WorkoutShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          load: false,
        }

    }
    
    async componentDidMount() {
        await this.props.fetchExercises()
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

    render() {
        const { workout, exercises } = this.props
        if (!this.state.load) {
          return null
        }
        return (
          <div id="workout-show">
            <div className="workout-show-background">
              <img src="https://fitbook-seeds.s3-us-west-1.amazonaws.com/workout-background.jpg" alt="" />
            </div>
            <div className="workout-title">{workout.title}</div>
            <div className="workout-show-container">
              <div className="workout-exercise-title">
                <h3>List of Exercises:</h3>
                <div>
                  {workout.exercises.map((exerciseId) => {
                    if (!exercises[exerciseId]) {
                      return null;
                    } else {
                      return (
                        <div className="exercise-container">
                          <div className="exercise-element">
                            {exercises[exerciseId].title}
                            <div className="exercise-img">
                              <div
                                className={`exercise-img-${exercises[
                                  exerciseId
                                ].category.toLowerCase()}`}
                              />
                            </div>
                          </div>
                        </div>
                      )
                    }
                  })}
                </div>
              </div>
            <div className="workout-notes">
              <div className="workout-notes-header">
                <h3>Notes:</h3>
              </div>
              <br />
              <h4>{workout.notes}</h4>
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