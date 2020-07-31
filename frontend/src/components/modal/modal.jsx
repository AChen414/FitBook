import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/user_modal_actions";
import  UserSettingsForm  from "../user/user_settings_container";
import ExerciseModal from '../exercises/exercise_form_container'; // update to container
import PhotoForm from '../user/upload_photo'

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case "settings":
      component = <UserSettingsForm />;
      break;
    case "create exercise": 
      component = <ExerciseModal />;
    case "photo":
      component = <PhotoForm />;
      break;
    default:
      return null;
  }
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
