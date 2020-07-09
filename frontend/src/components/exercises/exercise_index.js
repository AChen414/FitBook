import React from 'react';
import {withRouter} from 'react-router-dom';
import ExerciseItem from "./exercise_index_item";

class ExerciseIndex extends React.Component{
    constructor(props){
        super(props);
 
    }

    componentDidMount() {
        this.props.fetchExercises();
    }

    render(){
        if (this.props.exercises.length === 0) {
            return (
                <div>
                    No Exercises
                </div>
            )
        } else {
            return (
                <div>
                    <h2>All Exercises</h2>
                    {this.props.exercises.map(exercise => (
                        <ExerciseItem key={exercise._id} exercise={exercise}/>
                    ))}
                </div>
            )
        }
    }
}



export default withRouter(ExerciseIndex)