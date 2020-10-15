import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions";
import {editUser} from "../../actions/user_actions";

import QuizForm from "./fit_quiz";

const mSTP = (state) => {
  // debugger
  return {
    user: state.session.user,
  };
}

const mDTP = (dispatch) => {
  return {
    editUser: user => dispatch(editUser(user)),
    openModal: (modal, data) => dispatch(openModal(modal, data)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mSTP, mDTP)(QuizForm);
