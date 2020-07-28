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
            <div className="workout-index-background">
              <img
                src="https://fitbook-seeds.s3-us-west-1.amazonaws.com/workout-index-background.jpg"
                alt=""
              />
            </div>
            <div className="workout-index-header">
              <h1>These are {this.props.user.username}'s Workouts</h1>
            </div>
            <div className="workout-item-container">
              {this.props.workouts.map((workout) => (
                <WorkoutIndexItem
                  workout={workout}
                  key={workout._id}
                  deleteWorkout={this.props.deleteWorkout}
                />
              ))}
            </div>
            <Link
              to="/workouts/new"
              className="btn btn-info btn-lg add-workout-button"
            >
              Add Workout
            </Link>
          </div>
        );
    };
};

export default WorkoutIndex;