import { connect } from 'react-redux';
import { 
  fetchUserWorkouts, 
  fetchWorkout, 
  deleteWorkout 
} from '../../actions/workout_actions';
import WorkoutIndex from './workout_index';
import { fetchUserExercises } from "../../actions/exercise_actions";

const mapStateToProps = state => {
  return {
    workouts: Object.values(state.entities.workouts),
    user: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserWorkouts: (userId) => dispatch(fetchUserWorkouts(userId)),
    fetchWorkout: (workoutId) => dispatch(fetchWorkout(workoutId)),
    deleteWorkout: (workoutId) => dispatch(deleteWorkout(workoutId)),
    // fetchUserExercises: (userId) => dispatch(fetchUserExercises(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutIndex);