import { connect } from "react-redux";
import {closeModal } from "../../actions/modal_actions";
import { fetchUserProfile, updateProfilePic } from '../../actions/user_actions';
import PhotoForm from "./upload_photo";

const mSTP = (state) => {
  if (state.session.user.data) {
    return {
      currentUser: state.session.user.data._id,
      user: state.entities.users[state.session.user.data._id]
    };
  } else { 
    return {
      currentUser: state.session.user.id,
      user: state.entities.users[state.session.user.id],
    };
  }
};

const mDTP = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    fetchUserProfile: userId => dispatch(fetchUserProfile(userId)),
    updateProfilePic: (formData, userId) => dispatch(updateProfilePic(formData, userId))
  };
};

export default connect(mSTP, mDTP)(PhotoForm);
