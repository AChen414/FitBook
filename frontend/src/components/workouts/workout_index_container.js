import { connect } from 'react-redux';
import { 
  fetchUserWorkouts, 
  fetchWorkout, 
  deleteWorkout 
} from '../../actions/workout_actions';
import WorkoutIndex from './workout_index';

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
    deleteWorkout: (workoutId) => dispatch(deleteWorkout(workoutId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutIndex);