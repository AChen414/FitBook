import { connect } from "react-redux";

import UserProfile from "./user";
import {fetchUserWorkouts} from '../../actions/workout_actions'

const mSTP = (state) => {
  return {
    currentUser: state.session.user,
    workouts: Object.values(state.entities.workouts),
  };
};

const mDTP = dispatch => {
    return {
      fetchUserWorkouts: userId => dispatch(fetchUserWorkouts(userId))
    }
}

export default connect(mSTP, mDTP)(UserProfile);
