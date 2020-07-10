import React from "react";
import { Link } from 'react-router-dom';

class WorkoutShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // debugger
        this.props.fetchUserExercises(this.props.currentUser.id)
        this.props.fetchWorkout(this.props.match.params.workoutId)
    }

    render() {
        const { workout, exercises } = this.props
        // debugger
        if (!workout) {
            return null;
        }
        if (!exercises) {
            return null
        }
        return (
          <div className="workout-show">
            <div className="workout-title">{workout.title}</div>
            <div className="workout-show-container">
              <div className="workout-exercise-title">
                <ul>
                  {workout.exercises.map((exerciseId) => (
                    <li>
                      {exercises[exerciseId].title}
                      <div className="exercise-img">
                        <div
                          className={`exercise-img-${exercises[exerciseId].category.toLowerCase()}`}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="workout-notes">
                  <div className="workout-notes-header">
                      Notes:
                  </div>
                  <br/>
                  {workout.notes}
                </div>

            </div>
          </div>
        );
    }
}

export default WorkoutShow;