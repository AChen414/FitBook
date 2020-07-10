import { connect } from 'react-redux';
import { createWorkout } from '../../actions/workout_actions';
import { fetchUserExercises, composeExercise } from '../../actions/exercise_actions';
import { fetchUserWorkouts } from '../../actions/workout_actions';
import { openModal } from '../../actions/modal_actions';
import WorkoutForm from './workout_form';


const mapStateToProps = (state) => {
    return {
        exercises: state.entities.exercises.user,
        errors: state.errors.workout,
        user: state.session.user,
        workouts: state.entities.workouts
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createWorkout: (workout) => dispatch(createWorkout(workout)),
        fetchUserExercises: (userId) => dispatch(fetchUserExercises(userId)),
        fetchUserWorkouts: (userId) => dispatch(fetchUserWorkouts(userId)),
        composeExercise: (newExercise) => dispatch(composeExercise(newExercise)),
        openModal: (prompt) => dispatch(openModal(prompt))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutForm);