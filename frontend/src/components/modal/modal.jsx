import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import PhotoForm from '../user/upload_photo_container'
import ExerciseEditForm from "../exercises/exercise_edit_form";
import ExerciseModal from '../exercises/exercise_form_container'; // update to container
import TestForm from "../fitness_quiz/fit_quiz"

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.type) {
    case "testquiz":
      component = <TestForm closeModal={closeModal}/>;
      break;
    case "EDIT_EXERCISE":
      component = <ExerciseEditForm />;
      break;
    case "create exercise": 
      component = <ExerciseModal exerciseId={modal.data}/>;
      break;
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
    data: state.ui.modal
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
