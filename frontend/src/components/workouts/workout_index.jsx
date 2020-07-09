import React from 'react';
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
                <ul>
                    {
                        this.props.workouts.map((workout) => (
                            <WorkoutIndexItem 
                                workout={workout} 
                                key={workout._id} 
                                deleteWorkout={this.props.deleteWorkout}    
                            />
                        ))
                    }
                </ul>
            </div>
        );
    };
};

export default WorkoutIndex;