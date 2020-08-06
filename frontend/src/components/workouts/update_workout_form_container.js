import { connect } from 'react-redux';
import { updateWorkout } from '../../actions/workout_actions';
import { fetchUserExercises, composeExercise, } from '../../actions/exercise_actions';
import { fetchWorkout } from '../../actions/workout_actions'
import { openModal } from '../../actions/modal_actions';
import EditWorkoutForm from './update_workout_form';


const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        workout: state.entities.workouts[ownProps.match.params.workoutId],
        exercises: state.entities.exercises.user,
        errors: state.errors.workout,
        user: state.session.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateWorkout: (workout) => dispatch(updateWorkout(workout)),
        fetchUserExercises: (userId) => dispatch(fetchUserExercises(userId)),
        fetchWorkout: (workoutId) => dispatch(fetchWorkout(workoutId)),
        composeExercise: (newExercise) => dispatch(composeExercise(newExercise)),
        openModal: modal => dispatch(openModal(modal))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditWorkoutForm);