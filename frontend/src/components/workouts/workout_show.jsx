import React from "react";
import { Link } from 'react-router-dom';

class WorkoutShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          load: false
        }
    }
    
    async componentDidMount() {
        await this.props.fetchUserExercises(this.props.currentUser.id)
        await this.props.fetchWorkout(this.props.match.params.workoutId)
        this.setState({
          load: true
        })
    }

    render() {
        const { workout, exercises } = this.props
        // debugger
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
                    if (!exercises[exerciseId]) {
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
                      )
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
          </div>
        );
      }
    }

export default WorkoutShow;