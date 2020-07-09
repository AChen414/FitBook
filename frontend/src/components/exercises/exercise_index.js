import React from 'react';
import {withRouter} from 'react-router-dom';
import ExerciseItem from "./exercise_index_item";

class ExerciseIndex extends React.Component{
    constructor(props){
        super(props);

        this.searchFunction = this.searchFunction.bind(this)
    }

    searchFunction() {
        var myinput = document.querySelector("#myinput");

        myinput.addEventListener("keyup", function(e){
            var search_item = e.target.value.toLowerCase();
            var span_items = document.querySelectorAll(
                ".exercise-item span"
            );

            span_items.forEach(function(item) {
                if(item.textContent.toLowerCase().includes(search_item)) {
                    item.closest("span").style.display = "block";
                }
                else {
                    item.closest("li").style.display = "none";
                }
            })
            })
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
                <div className="search-box">
                  <input
                    type="text"
                    id="myinput"
                    onChange={this.searchFunction}
                    placeholder="Search Exercises"
                  />
                </div>
                <div>
                    <ul >All Exercises
                        <li>
                            {this.props.exercises.map((exercise) => (
                            <ExerciseItem key={exercise._id} exercise={exercise} />
                            ))}
                        </li>
                    </ul>
                </div>
                <script src="search.js"></script>
              </div>
            );
        }
    }
}



export default withRouter(ExerciseIndex)