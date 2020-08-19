import React from 'react';
import { Link } from 'react-router-dom'

class AllWorkoutsIndexItem extends React.Component {
    render() {
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
                </div>
            </div>
        );
    }
}

export default AllWorkoutsIndexItem;