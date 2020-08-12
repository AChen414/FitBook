import { connect } from "react-redux";
import { openModal,closeModal } from "../../actions/modal_actions";

import MainPage from './main_page'



const mDTP = (dispatch) => {
  return {
    openModal: (modal, data) => dispatch(openModal(modal, data)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(null, mDTP)(MainPage);
