import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/user_modal_actions';
import { composeExercise } from '../../actions/exercise_actions';

import ExerciseForm from './exercise_form';

const mSTP = state => {
    return {
        currentUser: state.session.user

    };
};

const mDTP = dispatch => {
    return {
        composeExercise: (exercise) => dispatch(composeExercise(exercise)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mSTP, mDTP)(ExerciseForm);