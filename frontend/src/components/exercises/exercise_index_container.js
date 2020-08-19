import { connect } from 'react-redux';
import { fetchExercises } from '../../actions/exercise_actions';
import { openModal } from '../../actions/modal_actions';

import ExerciseIndex from './exercise_index';

const mSTP = state => {
    if (state.session.user.data) {
        return {
            exercises: Object.values(state.entities.exercises.all),
            currentUser: state.session.user.data._id
        };
    } else {
        return {
            exercises: Object.values(state.entities.exercises.all),
            currentUser: state.session.user.id
        };
    }
}

const mDTP = dispatch => {
    return {
        fetchExercises: () => dispatch(fetchExercises()),
        openModal: (modal, data) => dispatch(openModal(modal, data)),
    };
}

export default connect(mSTP, mDTP)(ExerciseIndex);