import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/user_modal_actions";

import PhotoForm from "./upload_photo";

const mSTP = (state) => {
  return {
    currentUser: state.session.user,
  };
};

const mDTP = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mSTP, mDTP)(PhotoForm);
