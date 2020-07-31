import { connect } from 'react-redux';
import { fetchExercises } from '../../actions/exercise_actions';
import { openModal } from '../../actions/user_modal_actions';

import ExerciseIndex from './exercise_index';

const mSTP = state => {
    return {
        exercises: Object.values(state.entities.exercises.all)
    };
}

const mDTP = dispatch => {
    return {
        fetchExercises: () => dispatch(fetchExercises()),
        openModal: modal => dispatch(openModal(modal))
        
    };
}

export default connect(mSTP, mDTP)(ExerciseIndex)