import { connect } from 'react-redux';
import { updateWorkout } from '../../actions/workout_actions';
import { fetchUserExercises, composeExercise } from '../../actions/exercise_actions';
import { openModal } from '../../actions/user_modal_actions';
import WorkoutForm from './workout_form';


const mapStateToProps = (state, ownProps) => {
    return {
        workout: state.workouts[ownProps.match.params.workoutId],
        exercises: state.entities.exercises.user,
        errors: state.errors.workout,
        user: state.session.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateWorkout: (workout) => dispatch(updateWorkout(workout)),
        fetchUserExercises: (userId) => dispatch(fetchUserExercises(userId)),
        composeExercise: (newExercise) => dispatch(composeExercise(newExercise)),
        openModal: modal => dispatch(openModal(modal))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutForm);