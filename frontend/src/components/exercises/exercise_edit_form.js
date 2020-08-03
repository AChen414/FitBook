import React, { useState } from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/user_modal_actions';
import { editExercise } from '../../actions/exercise_actions';

const mSTP = state => {
  return {
    currentUser: state.session.user['id'],
    exercise: state.entities.exercises.all[state.ui.modal.data]
  };
}

const mDTP = dispatch => {
  return {
    editExercise: exercise => dispatch(editExercise(exercise)),
    closeModal: () => dispatch(closeModal())
  };
}

const ExerciseEditForm = props => {
  const title = useFormInput(props.exercise.title);
  const category = useFormInput(props.exercise.category);
  const equipment = useFormInput(props.exercise.equipment);  
  const notes = useFormInput(props.exercise.notes);
  
  function handleSubmit(e) {
    e.preventDefault();
    const editedExercise = {
      _id: props.exercise._id,
      title: title.value,
      category: category.value,
      equipment: equipment.value,
      notes: notes.value 
    };

    props.editExercise(editedExercise)
      .then(() => props.closeModal());
  }

  return (
    <div className="modal-dialog" role="document">
      <div className="modal-content exercise-edit-content">
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
          onClick={props.closeModal}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="modal-header">
          <div className="modal-title-container">
            <h3 className="modal-title">Edit your exercise</h3>
          </div>
        </div>
        <form className="exercise-edit-form" onSubmit={handleSubmit}>
          <div className="form-group exercise-info">
            <label for="exampleFormControlInput1">Title:
            </label>
            <input
              type="text"
              id="exampleFormControlInput1"
              className="form-control"
              {...title}
            />
          </div>
          <div className="form-group exercise-category">
            <label for="exampleFormControlSelect1">
              Select Category:
            </label>
            <select 
              className="form-control" 
              id="exampleFormControlSelect1" 
              {...category}
            >
              <option>Select Category</option>
              <option>Full-Body</option>
              <option>Chest</option>
              <option>Arms</option>
              <option>Shoulders</option>
              <option>Legs</option>
            </select>
          </div>
          <div className="form-group exercise-info">
            <label for="exampleFormControlInput2">Equipment:
            </label>
            <input 
              type="text"
              id="exampleFormControlInput2"
              className="form-control" 
              {...equipment}
            />
          </div>
          <div className="form-group exercise-info">
            <label for="exampleFormControlInput3">Notes:
            </label>
            <input 
              type="text"
              id="exampleFormControlInput3"
              className="form-control"
              {...notes}
            />
          </div>
          <div className="exercise-edit-button">
            <button className="btn btn-primary" type="submit">
              Update exercise
            </button>
          </div>
        </form>  
      </div>
    </div>
  );
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  function handleChange(e) {
    setValue(e.currentTarget.value);
  }

  return {
    value,
    onChange: handleChange
  };
}

export default connect(mSTP, mDTP)(ExerciseEditForm);