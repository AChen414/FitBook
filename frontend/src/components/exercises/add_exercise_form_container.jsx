import { connect } from 'react-redux';
import AddExerciseForm from './add_exercise_form';
import { composeExercise } from '../../actions/exercise_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = state => {
    return {
        currentUser: state.session.currentUser,
        formType: 'Add Exercise',
        servers: state.entities.servers
    };
};

const mDTP = dispatch => {
    return {
        composeExercise: server => dispatch(composeExercise(server)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mSTP, mDTP)(AddExerciseForm);