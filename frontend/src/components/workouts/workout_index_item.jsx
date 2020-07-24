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
          <div className="workout-item">
            <div className="workout-item-content"></div>
              <Link to={`/workouts/${this.props.workout._id}`}>
                <div className="workout-item-title">{this.props.workout.title}</div>
              </Link>
            <button className="btn btn-info btn-md workout-item-delete" onClick={this.handleDelete}>Delete</button>
          </div>
        );
    }
}

export default WorkoutIndexItem;