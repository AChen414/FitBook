import React from 'react';
import { connect } from 'react-redux';
import AddExerciseFormContainer from './exercises/add_exercise_form_container';
import { closeModal } from '../actions/modal_actions';

const Modal = ({ modal, closeModal }) => {
    if (!modal) {
        return null;
    };
    let component;
    switch (modal) {
        case 'Add Exercise':
            component = <AddExerciseFormContainer />;
            break;
        default:
            return null;
    };
    return (
        <div className="modal-background" onClick={() => closeModal()}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
};

const mSTP = state => {
    return {
        modal: state.ui.modal
    };
};

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mSTP, mDTP)(Modal);