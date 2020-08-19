import React from 'react';
import { Link  } from "react-router-dom";

class Result extends React.Component {
  componentDidMount(){
    // console.log("ello i am the update function")
    // console.log("current fitness program:")
    // console.log(`${this.props.quizResult[3]}-${this.props.quizResult[2]}`);
    let updatedUser = {
      _id: this.props.user.id,
      fitnessProgram: `${this.props.quizResult[3]} ${this.props.quizResult[2]}`,
    };
    this.props.editUser(updatedUser);
  }
   
  render (){
    let program = this.props.quizResult[2]
    let level = this.props.quizResult[3]
    let bodyType
    let goal


    if (program === "Shred") {
      bodyType = "A Skinny-Fat Physique";
      goal = "Lean Down, Lose Excess Body Fay, And Reveal Muscle Definition";
    } else if (program === "Build") {
      bodyType = "A Skinny Physique";
      goal = "Build Lean, Dense Muscle, And Definition Without Gaining Fat";
    } else if (program === "Drop" || program === "Lose") {
      bodyType = "Excess Fat"
      goal = "Reveal Muscle Definition"
    }

     
    return (
        <div key="transition-group-content">
          <div className="fitness-result-content">
            <div className="fitness-result-head">
              <p>
                Based on your answers - Here is your recommened solution to reach
                your goal physique:
              </p>
            </div>
            <div className="fitness-program">
              <p>
                The {level} {program} Program
              </p>
            </div>
            <div className="fitness-description">
              <p>
                Will Help You If You're Struggling With <strong>{bodyType}</strong>{" "}
                And Want To...
              </p>
            </div>
            <div className="fitness-goal">
              <p>{goal}</p>
            </div>
          </div>
          <div className="fitness-result-nav">
            <Link to={`/profile`}>
              <button
                type="button"
                className="btn btn-info fitness-nav-btn"
                onClick={() => this.props.closeModal()}
              >
                View Your Profile!
              </button>
            </Link>

            <Link to={`/workouts`}>
              <button
                type="button"
                className="btn btn-info fitness-nav-btn"
                onClick={() => this.props.closeModal()}
              >
                Create A Workout Now!
              </button>
            </Link>

            <Link to={`/exercises`}>
              <button
                type="button"
                className="btn btn-info fitness-nav-btn"
                onClick={() => this.props.closeModal()}
              >
                Search For Custom Exercises!
              </button>
            </Link>
          </div>
        </div>
    );
  }
}


export default Result;