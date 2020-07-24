import React from "react";
import UserCalender from './calendar';
import {Link} from 'react-router-dom'

class UserProfile extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchUserWorkouts(this.props.currentUser.id)
    }


    render (){
        if (!this.props.workouts) return null 
        const {currentUser} = this.props


        const UserWorkouts =
          this.props.workouts.length !== 0 ? (
            <ul className="workout-list">
              {this.props.workouts.map((workout) => (
                <button type="button" className="btn btn-info">
                  <Link to={`/workouts/${workout._id}`}>{workout.title}</Link>
                </button>
              ))}
            </ul>
          ) : (
            <div>No Workouts</div>
          );
        
        return (
          <div className="user-body">
            <div className="container">
              <div className="row profile">
                <div className="col-md-3">
                  <div className="profile-sidebar">
                    <div className="profile-userpic">
                      <img
                        src="https://cdn.onlinewebfonts.com/svg/img_568657.png"
                        className="img-responsive"
                        alt=""
                      />
                    </div>

                    <div className="profile-usertitle">
                      <div className="profile-usertitle-name">
                        {currentUser.username}
                      </div>
                    </div>

                    <div className="profile-userbuttons">
                      <button type="button" className="btn btn-success btn-sm">
                        Upload Photo
                      </button> 
                      {/* <button type="button" className="btn btn-danger btn-sm">
                        Message
                      </button> */}
                    </div> 

                    <div className="profile-usermenu">
                      <ul className="nav">
                        <li >
                          <a href="#/workouts/new">
                            <i className="glyphicon glyphicon-plus-sign"></i>
                            Add a New Workout
                          </a>
                        </li>
                        <li >
                          <a href="#/profile" onClick={() => this.props.openModal("settings")} >
                            <i className="glyphicon glyphicon-user"></i>
                            User Quiz
                          </a>
                        </li>
                        {/* <li>
                        <a href="#/profile">
                          <i className="glyphicon glyphicon-ok"></i>
                          Goals
                        </a>
                      </li> */}
                      </ul>
                    </div>
                    <div id="recommendation">
                      <p>
                        Based on your answers - Here is our recommendation to
                        reach your Goal Physique:
                      </p>
                      <div>
                        <h4>3 x Workouts/Week</h4>
                        <div>Workout 1: Cardio </div>
                        <div>Workout 2: Upper Body</div>
                        <div>Workout 3: Total Body</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-9">
                  <div className="user-workouts">
                    <h4>My Workouts: </h4>
                    {UserWorkouts}
                  </div>
                  <div className="profile-content">
                    <div className="schedule-header">
                      <h4>Your Schedule</h4>
                      <div className="schedule-instructions">
                        *Click a day to add your workout
                      </div>
                    </div>
                    <UserCalender />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default UserProfile;


// "The FitBook Program" will help if
//                     you're struggle with your current physique and want to lean
//                     down, shed excess body fat, and reveal muscle definition.