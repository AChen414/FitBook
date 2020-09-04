import { connect } from "react-redux";
import { openModal,closeModal } from "../../actions/modal_actions";

import MainPage from './main_page'

const mSTP = state => {
  if (state.session.user !== undefined) {
    return {
      user : state.session.user
    }
  } else {
    return {
      user : ""
    }
  }
}

const mDTP = (dispatch) => {
  return {
    openModal: (modal, data) => dispatch(openModal(modal, data)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mSTP, mDTP)(MainPage);
