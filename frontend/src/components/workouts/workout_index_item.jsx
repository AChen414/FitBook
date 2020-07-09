import React from 'react';

const WorkoutIndexItem = (props) => {

    return (
        <li>
            <h1>{props.workout.title}</h1>
        </li>
    )
}

export default WorkoutIndexItem;