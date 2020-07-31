import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editExercise } from '../../actions/exercise_actions';

const mSTP = state => {
  return {
    currentUser: state.session.user['id']
  };
}

const mDTP = dispatch => {
  return {
    editExercise: exercise => dispatch(editExercise(exercise))
  };
}

const ExerciseEditForm = props => {
  return (
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">Exercise Edit Form</h3>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            // onClick={this.props.closeModal}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default connect(mSTP, mDTP)(ExerciseEditForm);