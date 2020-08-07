import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";

import FitnessQuiz from "./fitness_quiz";

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

export default connect(mSTP, mDTP)(FitnessQuiz);
