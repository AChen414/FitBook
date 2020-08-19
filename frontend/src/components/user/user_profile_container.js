import { connect } from "react-redux";

import UserProfile from "./user_profile";
import {fetchUserWorkouts} from '../../actions/workout_actions'
import {openModal} from '../../actions/modal_actions'
import { fetchUserProfile, updateProfilePic, editUser } from '../../actions/user_actions';


const mSTP = (state) => {
    return{
      currentUser: state.session.user,
      workouts: Object.values(state.entities.workouts),
      user: state.entities.users[state.session.user.id]
    }
};

const mDTP = dispatch => {
    return {
      fetchUserWorkouts: userId => dispatch(fetchUserWorkouts(userId)),
      openModal: modal => dispatch(openModal(modal)),
      fetchUserProfile: userId => dispatch(fetchUserProfile(userId)),
      updateProfilePic: (formData, userId) => dispatch(updateProfilePic(formData, userId)),
      editUser: user => dispatch(editUser(user))
    }
}

export default connect(mSTP, mDTP)(UserProfile);
