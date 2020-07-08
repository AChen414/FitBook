import React from 'react';

class ExerciseItem extends React.Component{
    constructor(props){
        super(props)
    }

    render () {
        return(
            <div>
                <h3>{this.props.exercise}</h3>
            </div>
        )
    }
}

export default ExerciseItem