import React from 'react';
import { Link } from 'react-router-dom'

class WorkoutIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteWorkout(this.props.workout._id);
    }

    handleUpdate(e) {
        e.preventDefault();
        this.props.updateWorkout(this.props.workout._id);    }

    render() {
      debugger
        return (
          <div className="workout-item">
            <div className="workout-item-content">
              <div className="workout-title-container">
                <Link to={`/workouts/${this.props.workout._id}`}>
                  <div className="workout-item-title">
                    {this.props.workout.title}
                  </div>
                </Link>
              </div>
              <div className="workout-button-container">
                <button
                  className="btn btn-info btn-md workout-item-delete"
                  onClick={this.handleDelete}
                >
                  Delete
                </button>
                  <Link to={`/workouts/${this.props.workout._id}/edit`}>
                    <button className="btn btn-info btn-md workout-item-update">Edit</button>
                    </Link>
              </div>
            </div>
          </div>
        );
    }
}

export default WorkoutIndexItem;