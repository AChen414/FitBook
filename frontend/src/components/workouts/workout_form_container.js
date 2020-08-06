import { connect } from 'react-redux';
import { createWorkout } from '../../actions/workout_actions';
import { fetchUserExercises, composeExercise } from '../../actions/exercise_actions';
import { openModal } from '../../actions/modal_actions';
import WorkoutForm from './workout_form';


const mapStateToProps = (state) => {
    return {
        exercises: state.entities.exercises.user,
        errors: state.errors.workout,
        user: state.session.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createWorkout: (workout) => dispatch(createWorkout(workout)),
        fetchUserExercises: (userId) => dispatch(fetchUserExercises(userId)),
        composeExercise: (newExercise) => dispatch(composeExercise(newExercise)),
        openModal: modal => dispatch(openModal(modal))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutForm);