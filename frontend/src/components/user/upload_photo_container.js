import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions";
import { fetchUserProfile, updateProfilePic } from '../../actions/user_actions';
import PhotoForm from "./upload_photo";

const mSTP = (state) => {
  return {
    currentUser: state.session.user,
    user: state.entities.users[state.session.user.id]

  };
};

const mDTP = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    fetchUserProfile: userId => dispatch(fetchUserProfile(userId)),
    updateProfilePic: (formData, userId) => dispatch(updateProfilePic(formData, userId))
  };
};

export default connect(mSTP, mDTP)(PhotoForm);
