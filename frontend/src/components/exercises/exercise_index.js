import React from 'react';
import {withRouter} from 'react-router-dom';
import ExerciseItem from "./exercise_index_item";

class ExerciseIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            search: ''
        };
        this.updateSearch = this.updateSearch.bind(this);
    }

    updateSearch(e) {
        this.setState({search: e.target.value.substring(0, 20)});
    }

    componentDidMount() {
        this.props.fetchExercises();
    }

    render(){
        let userExercises = {};
        for (const property in this.props.exercises) {
            if (this.props.exercises[property].user === this.props.currentUser) {
                userExercises[property] = this.props.exercises[property];
            }
        }
        
        let filteredExercises = (Object.values(userExercises)).filter((exercise) => {
            return exercise.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        });

        return (
            <div className="exercise-index-container">
                <div className="search-box">
                    <input
                    type="text"
                    id="myinput"
                    value={this.search}
                    onChange={this.updateSearch}
                    placeholder="Filter by exercise (Bench)"
                    />
                    <button
                        className="btn btn-info btn-sm add-exercise"
                        onClick={() => this.props.openModal('create exercise')}
                    >
                        Create New Exercise
                    </button>
                </div>
                <div className="exercise-index">
                    {filteredExercises.map((exercise, i) => (
                        <ExerciseItem 
                            key={`exercise._id-${i}`} 
                            exercise={exercise}
                            currentUser={this.props.currentUser}
                            openModal={this.props.openModal}
                            closeModal={this.props.closeModal}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default withRouter(ExerciseIndex)