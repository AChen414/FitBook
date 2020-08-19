import React from 'react';
import { Link } from 'react-router-dom';
import WorkoutIndexItem from './workout_index_item';
import AllWorkoutsIndexItem from './allWorkout_index_item'

class WorkoutIndex extends React.Component {
    async componentDidMount() {
      await this.props.fetchWorkouts();
      await this.props.fetchUserWorkouts(this.props.user.id);
    };

    render() {
        if (!this.props.workouts) return null
        if (!this.props.allWorkouts) return null
        
        return (
          <div className="workout-index">
            <div className="workout-index-background">
              <img src="https://fitbook-seeds.s3-us-west-1.amazonaws.com/workout-index-background-new.jpg" alt=""/>
            </div>
            <div className="whole-container">
              <div className="user-index-container">
                <div className="workout-index-header">
                  <h1>These are {this.props.user.username}'s Workouts</h1>
                </div>
                <div className="workout-item-container">
                  {this.props.workouts.map((workout) => (
                    <WorkoutIndexItem
                      workout={workout}
                      key={workout._id}
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
              <div className="alluser-workout-index-container">
                <div className="workout-index-header">
                  <h1>These are all users' Workouts</h1>
                </div>
                <div className="workout-item-container">
                  {this.props.allWorkouts.map((workout) => (
                    <AllWorkoutsIndexItem
                      workout={workout}
                      key={workout._id}
                    />
                  ))}
                </div>
              </div>    
            </div>
          </div>
        );
    };
};

export default WorkoutIndex;