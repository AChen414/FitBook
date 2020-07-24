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
        return (
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
                      Follow
                    </button>
                    <button type="button" className="btn btn-danger btn-sm">
                      Message
                    </button>
                  </div>

                  <div className="profile-usermenu">
                    <ul className="nav">
                      <li className="active">
                        <a href="#/workouts/new">
                          <i className="glyphicon glyphicon-plus-sign"></i>
                          Add a New Workout
                        </a>
                      </li>
                      <li>
                        <a href="#/profile" onClick={() => this.props.openModal('settings')}>
                          <i className="glyphicon glyphicon-user"></i>
                          User Settings
                        </a>
                      </li>
                      <li>
                        <a href="#/profile">
                          <i className="glyphicon glyphicon-ok"></i>
                          Goals
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-9">
                <div className="user-workouts">
                    <div>My Workouts: </div>
                    <ul className="workout-list">
                        {this.props.workouts.map((workout) => (
                        <button type="button" className="user-workout-item">
                            <Link to={`/workouts/${workout._id}`}>
                            {workout.title}
                            </Link>
                        </button>
                        ))}
                    </ul>
                </div>
                <div className="profile-content">
                  <UserCalender />
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default UserProfile;