import React from "react";
import UserCalender from './calendar';


class UserProfile extends React.Component{
    constructor(props){
        super(props)
    }


    render (){
        const {currentUser} = this.props

        return(
            <div className="container">
                <div className="row profile">
                    <div className="col-md-3">
                        <div className="profile-sidebar">
                            <div className="profile-userpic">
                                <img src="https://cdn.onlinewebfonts.com/svg/img_568657.png" className="img-responsive" alt=""/>
                            </div>
         
                            <div class="profile-usertitle">
                                <div class="profile-usertitle-name">
                                    {currentUser.username}
                                </div>
                            </div>
            
                            <div className="profile-userbuttons">
                                <button type="button" className="btn btn-success btn-sm">Follow</button>
                                <button type="button" className="btn btn-danger btn-sm">Message</button>
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
                                        <a href="#/profile">
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
                            {/* loop and grab all workouts and create an button for each */}
                            {/* want the buttons to be drag and drop able to the calendar */}
                            {/* can have link to that workout  */}
                            <button type="button" className="btn btn-primary">Workout A</button>
                            <button type="button" className="btn btn-success">Workout B</button>
                            <button type="button" className="btn btn-danger">Workout C</button>
                        </div>
                        <div className="profile-content">
                            <UserCalender/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfile;