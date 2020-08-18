import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions";

import QuizForm from "./fit_quiz";

const mSTP = (state) => {
  return {
    user: state.session.user,
  };
}

const mDTP = (dispatch) => {
  return {
    openModal: (modal, data) => dispatch(openModal(modal, data)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mSTP, mDTP)(QuizForm);
