import { connect } from 'react-redux';
import { 
  fetchUserWorkouts, 
  fetchWorkout, 
  deleteWorkout,
  fetchWorkouts 
} from '../../actions/workout_actions';
import WorkoutIndex from './workout_index';
import { fetchUserExercises } from "../../actions/exercise_actions";

const mapStateToProps = state => {
  if (state.session.user.data) {
    return {
      allWorkouts: Object.values(state.entities.workouts.all),
      workouts: Object.values(state.entities.workouts.user),
      user: state.session.user.data
    }
  } else {
    return {
      allWorkouts: Object.values(state.entities.workouts.all),
      workouts: Object.values(state.entities.workouts.user),
      user: state.session.user
    }
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchWorkouts: () => dispatch(fetchWorkouts()),
    fetchUserWorkouts: (userId) => dispatch(fetchUserWorkouts(userId)),
    fetchWorkout: (workoutId) => dispatch(fetchWorkout(workoutId)),
    deleteWorkout: (workoutId) => dispatch(deleteWorkout(workoutId)),
    fetchUserExercises: (userId) => dispatch(fetchUserExercises(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutIndex);