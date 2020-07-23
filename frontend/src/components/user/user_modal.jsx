import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/user_modal_actions";
import {User_Settings} from "./user_settings"

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component = <User_Settings/>

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);