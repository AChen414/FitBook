import React from "react";
// import UserCalendar from './calendar';
import UserCalendar from './calendar.tsx';
import { Link, withRouter} from 'react-router-dom';


class UserProfile extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      profilePic: null,
    };
    
  }

  async UNSAFE_componentWillMount() {
    await this.props.fetchUserWorkouts(this.props.currentUser)
  }

  componentDidMount() {
    this.props.fetchUserProfile(this.props.currentUser)
    this.props.fetchUserWorkouts(this.props.currentUser)
  }


  render (){
      if (!this.props.user) return null
      if (!this.props.workouts) return null 
      // const {currentUser} = this.props
      const UserWorkouts = this.props.workouts.length !== 0 ? (
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
          <div className="workout-list-none">
            <h3>No Current Workouts...</h3>
            <Link to={`/workouts`}>
              <button
                type="button"
                className="btn btn-info workout-nav-btn"
              >
                Add A New Workout
              </button>
            </Link>
          </div>
        );
      
      // Fitness Program
      let workoutPlan 
      let userFitnessProgram = this.props.user.fitnessProgram.split(' ')
      if ( userFitnessProgram[0] === "Beginner") {
        workoutPlan = (
          <div className="workout-plan">
            <div className="workout-duration">Duration: 8 Weeks</div>
            <div className="workout-days">Work Out Days Per Week: <strong>3</strong> </div>
            <div className="workout-focus">
              Focus: Muscle Endurance, Strength Training
            </div>
          </div>
        );
      } else if (userFitnessProgram[0] === "Intermediate") {
        workoutPlan = (
          <div className="workout-plan">
            <div className="workout-duration">Duration: 8 Weeks</div>
            <div className="workout-days">
              Work Out Days Per Week: <strong>4</strong>{" "}
            </div>
            <div className="workout-focus">
              Focus: Muscle Growth, Strength Training
            </div>
          </div>
        );;
      } else {
        workoutPlan = (
          <div className="workout-plan">
            <div className="workout-duration">Duration: 8 Weeks</div>
            <div className="workout-days">
              Work Out Days Per Week: <strong>5</strong>{" "}
            </div>
            <div className="workout-focus">
              Focus: Muscle Tone, Strength Training
            </div>
          </div>
        );;
      }

      const fitnessProgramType =
        this.props.user.fitnessProgram !== "" ? (
          <div className="fit-program-container">
            <div className="fitness-program">
              The {this.props.user.fitnessProgram}
            </div>
            {workoutPlan}
          </div>
        ) : (
          <div className="fit-program-none">
            <h3>No Fitness Program Discovered Yet</h3>
            <button
              type="button"
              className="btn btn-info workout-nav-btn"
              onClick={() => this.props.openModal("testquiz")}
            >
              Take the 1-minute quiz now
            </button>
          </div>
        );

     

      // Pictures 
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
                        {this.props.user.username}
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
                      <a href="#Program" data-toggle="tab">
                        My Program
                      </a>
                    </li>
                    <li>
                      <a href="#Workout" data-toggle="tab">
                        View My Workouts
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content">
                    <div className="tab-pane fade in active" id="Program">
                      <h4 className="tab-header">My Workout Program</h4>
                      {fitnessProgramType}
                    </div>
                    <div className="tab-pane fade " id="Workout">
                      <h4 className="tab-header">My Workouts Links: </h4>
                      {UserWorkouts}
                    </div>
                  </div>
                  <div className="profile-content">
                    <div className="schedule-header">
                      <h4>Your Schedule</h4>
                    </div>
                    <UserCalendar
                      editUser={this.props.editUser}
                      currentUser={this.props.user._id}
                      calendarData={this.props.user.calendarData}
                      workouts={this.props.workouts.map((workout) => {
                        return { Id: workout._id, Name: workout.title };
                      })}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default withRouter(UserProfile);
