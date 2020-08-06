import React, { useState } from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
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
      <div className="modal-content">
        <div className="modal-header">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={props.closeModal}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <h3 className="modal-title">Edit your exercise</h3>
        </div>
        <form className="exercise-edit-form" onSubmit={handleSubmit}>
          <div className="form-group exercise-info">
            <label>Title:
            </label>
            <input
              type="text"
              {...title}
            />
          </div>
          <div className="form-group exercise-category">
            <label htmlFor="exampleFormControlSelect1">
              Select Category
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
            <label>Equipment:
            </label>
            <input 
              type="text" 
              {...equipment}
            />
          </div>
          <div className="form-group exercise-info">
            <label>Notes:
            </label>
            <input 
              type="text" 
              {...notes}
            />
          </div>
          <button>
            Update exercise
          </button>
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