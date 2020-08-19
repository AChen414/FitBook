import { connect } from "react-redux";
import WorkoutShow from "./workout_show";
import { fetchWorkout, updateWorkout } from "../../actions/workout_actions";
import { fetchExercises } from '../../actions/exercise_actions';

const mapSTP = (state, ownProps) => {
  const workoutId = ownProps.match.params.workoutId;
  const currentUser = state.session.user;
  return {
    currentUser,
    workout: state.entities.workouts[workoutId],
    exercises: state.entities.exercises.all
  };
};

const mapDTP = (dispatch) => ({
  
  updateWorkout: (workout) => dispatch(updateWorkout(workout)), 
  fetchWorkout: (id) => dispatch(fetchWorkout(id)),
  fetchExercises: () => dispatch(fetchExercises()),
});

export default connect(mapSTP, mapDTP)(WorkoutShow);