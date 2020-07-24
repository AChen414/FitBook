import { connect } from "react-redux";

import UserProfile from "./user";
import {fetchUserWorkouts} from '../../actions/workout_actions'
import {openModal} from '../../actions/user_modal_actions'

const mSTP = (state) => {
  return {
    currentUser: state.session.user,
    workouts: Object.values(state.entities.workouts),
  };
};

const mDTP = dispatch => {
    return {
      fetchUserWorkouts: userId => dispatch(fetchUserWorkouts(userId)),
      openModal: modal => dispatch(openModal(modal))
    }
}

export default connect(mSTP, mDTP)(UserProfile);
