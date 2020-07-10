import React from 'react';
import { Link } from 'react-router-dom';
import WorkoutIndexItem from './workout_index_item';

class WorkoutIndex extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.fetchUserWorkouts(this.props.user.id);
    };

    render() {
        if (!this.props.workouts) return null
        
        return (
          <div className="workout-index">
            <div className="workout-index-header">
              <h1>These are {this.props.user.email}'s Workouts</h1>
            </div>
            <ul>
              {this.props.workouts.map((workout) => (
                <WorkoutIndexItem
                  workout={workout}
                  key={workout._id}
                  deleteWorkout={this.props.deleteWorkout}
                />
              ))}
            </ul>
            <div>
              <Link to="/workouts/new" className="add-workout-button">
                <button>Add Workout</button>
              </Link>
            </div>
          </div>
        );
    };
};

export default WorkoutIndex;