import React from "react";
import UserCalender from './calendar';
import { Link, withRouter} from 'react-router-dom';


class UserProfile extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      profilePic: null,
    };

  }

  componentDidMount() {
    this.props.fetchUserProfile(this.props.currentUser.id)
    this.props.fetchUserWorkouts(this.props.currentUser.id)
  }
  
  handleNavChoice(){

  }

  render (){
      if (!this.props.user) return null
      if (!this.props.workouts) return null 
      const {currentUser} = this.props
      const UserWorkouts =
        this.props.workouts.length !== 0 ? (
          <ul className="workout-list">
            {this.props.workouts.map((workout) => (
              <Link key={workout._id} to={`/workouts/${workout._id}`}>
                <button
                  key={workout._id}
                  type="button"
                  className="btn btn-info"
                >
                  {workout.title}
                </button>
              </Link>
            ))}
          </ul>
        ) : (
          <div>No Workouts</div>
        );
      const tempProfilePic = "https://cdn.onlinewebfonts.com/svg/img_568657.png"
      // if profile link exists use it if not use default avatar
      const profileLink =
        this.props.user.profilePhotoLink === tempProfilePic
          ? tempProfilePic
          : this.props.user.profilePhotoLink;
      const profilePic = (
          <div className="profile-userpic">
            <img
              src={profileLink}
              className="img-responsive"
              alt=""
            />
          </div>
        ) 
      
    
      
      return (
        <div className="user-body">
          <div className="container">
            <div className="row profile">
              <div className="col-md-3">
                <div className="profile-sidebar">
                  <div className="user-profile-pic">
                    <div className="profile-usertitle">
                      <div className="profile-usertitle-name">
                        {currentUser.username}
                      </div>
                    </div>
                    {profilePic}
                    <button
                      type="button"
                      className="btn btn-success btn-sm"
                      onClick={() => this.props.openModal("photo")}
                    >
                      Change Profile Photo
                    </button>
                  </div>
                  <div className="profile-usermenu">
                    <ul className="nav">
                      <li>
                        <a href="#/workouts/new">
                          <i className="glyphicon glyphicon-plus-sign"></i>
                          Add a New Workout
                        </a>
                      </li>
                      {/* <li>
                        <a
                          href="#/profile"
                          onClick={() => this.props.openModal("fitquiz")}
                        >
                          <i className="glyphicon glyphicon-user"></i>
                          User Quiz
                        </a>
                      </li> */}
                      <li>
                        <a
                          href="#/profile"
                          onClick={() => this.props.openModal("testquiz")}
                        >
                          <i className="glyphicon glyphicon-ok"></i>
                          Take the 1-minute Test
                        </a>
                      </li>
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

              {/* Top Nav */}
              <div className="col-md-9">
                <div className="user-nav-container">
                  <ul className="nav nav-tabs">
                    <li className="active">
                      <a href="#Workout" data-toggle="tab">
                        View My Workouts
                      </a>
                    </li>
                    <li >
                      <a href="#Program" data-toggle="tab">
                        My Program
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content">
                    <div className="tab-pane fade in active" id="Workout">
                      <h4>My Workouts Links: </h4>
                      {UserWorkouts}
                    </div>
                    <div className="tab-pane fade" id="Program">
                      <h4>Program </h4>
                      this hard ass shit
                    </div>
                  </div>

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

export default withRouter(UserProfile);


// "The FitBook Program" will help if
//                     you're struggle with your current physique and want to lean
//                     down, shed excess body fat, and reveal muscle definition.