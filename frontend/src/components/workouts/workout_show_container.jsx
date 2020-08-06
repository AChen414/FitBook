import { connect } from "react-redux";
import WorkoutShow from "./workout_show";
import { fetchWorkout } from "../../actions/workout_actions";
import { fetchUserExercises } from '../../actions/exercise_actions';

const mapSTP = (state, ownProps) => {
  const workoutId = ownProps.match.params.workoutId;
  const currentUser = state.session.user;
  return {
    currentUser,
    workout: state.entities.workouts[workoutId],
    exercises: state.entities.exercises.user
  };
};

const mapDTP = (dispatch) => ({
  fetchWorkout: (id) => dispatch(fetchWorkout(id)),
  fetchUserExercises: (userId) => dispatch(fetchUserExercises(userId)),
});

export default connect(mapSTP, mapDTP)(WorkoutShow);