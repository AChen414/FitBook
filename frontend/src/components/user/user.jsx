import React from "react";
import UserCalender from './calendar'


class UserProfile extends React.Component{
    constructor(props){
        super(props)
    }


    render (){
        const {currentUser} = this.props

        return(
            <div class="container">
                <div class="row profile">
                    <div class="col-md-3">
                        <div class="profile-sidebar">
                            <div class="profile-userpic">
                                <img src="https://cdn.onlinewebfonts.com/svg/img_568657.png" class="img-responsive" alt=""/>
                            </div>
         
                            <div class="profile-usertitle">
                                <div class="profile-usertitle-name">
                                    {currentUser.username}
                                </div>
                            </div>
            
                            <div class="profile-userbuttons">
                                <button type="button" class="btn btn-success btn-sm">Follow</button>
                                <button type="button" class="btn btn-danger btn-sm">Message</button>
                            </div>
              
                            <div class="profile-usermenu">
                                <ul class="nav">
                                    <li class="active">
                                        <a href="#/workouts/new">
                                            <i class="glyphicon glyphicon-plus-sign"></i>
                                            Add a New Workout 
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#/profile">
                                            <i class="glyphicon glyphicon-user"></i>
                                        User Settings 
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#/profile">
                                            <i class="glyphicon glyphicon-ok"></i>
                                            Goals 
                                        </a>
                                    </li>
                                </ul>
                            </div>     
			            </div>
                    </div>

                <div class="col-md-9">
                    <div class="profile-content">
                        <UserCalender/>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfile