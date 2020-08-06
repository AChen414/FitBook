import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions";

import UserSettings from "./user_settings";

const mSTP = state => {
  return {
    currentUser: state.session.user,
  };
};

const mDTP = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mSTP, mDTP)(UserSettings);
