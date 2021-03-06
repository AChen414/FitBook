import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
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