import React from 'react';
import { Link } from 'react-router-dom'

class WorkoutIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteWorkout(this.props.workout._id);
    }
    
    render() {
        return (
          <div className="user-workout">
            <li>
              <Link to={`/workouts/${this.props.workout._id}`}>
                <span className="workout-index-title">{this.props.workout.title}</span>
              </Link>
              <button onClick={this.handleDelete}>Delete</button>
            </li>
          </div>
        );
    }
}

export default WorkoutIndexItem;