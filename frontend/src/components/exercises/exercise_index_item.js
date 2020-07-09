import React from 'react';

class ExerciseItem extends React.Component{
    constructor(props){
        super(props)
    }


    render() {
        return (
          <div className="exercise-item">
            <span>{this.props.exercise.title}</span>
          </div>
        );

    }
}

export default ExerciseItem