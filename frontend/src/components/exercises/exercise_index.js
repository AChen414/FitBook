import React from 'react';
import {withRouter} from 'react-router-dom';
import ExerciseItem from "./exercise_index_item";

class ExerciseIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            search: ''
        }
        this.updateSearch = this.updateSearch.bind(this)
    }

    updateSearch(e) {
        this.setState({search: e.target.value.substring(0, 20)})
    }

    componentDidMount() {
        this.props.fetchExercises();
    }

    render(){
        let filteredExercises = (Object.values(this.props.exercises)).filter((exercise) => {
            return exercise.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        });
        // if (!this.props.exercises) return null
        if (this.props.exercises.length === 0) {
            return (
                <div>
                    No Exercises
                </div>
            )
        } else {
            return (
              <div>
                <div className="search-box">
                  <input
                    type="text"
                    id="myinput"
                    value={this.search}
                    onChange={this.updateSearch}
                    placeholder="Filter by Exercises"
                  />
                </div>
                <ul>All Exercises:
                    {filteredExercises.map((exercise, i) => (
                        <li>
                            <ExerciseItem key={`exercise._id-${i}`} exercise={exercise}/>
                        </li>
                    ))}
                </ul>
              </div>
            );
        }
    }
}



export default withRouter(ExerciseIndex)