import {
    getExercises, getUserExercises, createExercise
} from '../util/exercise_api_util'

export const RECEIVE_EXERCISES = "RECEIVE_EXERCISES";
export const RECEIVE_USER_EXERCISES = "RECEIVE_USER_EXERCISES";
export const RECEIVE_NEW_EXERCISE = "RECEIVE_NEW_EXERCISE";

export const receiveExercises = exercises => {
    return {
      type: RECEIVE_EXERCISES,
      exercises
    }
};

export const receiveUserExercises = exercises => {
    return {
      type: RECEIVE_USER_EXERCISES,
      exercises
    }
};

export const receiveNewExercises = exercise => {
    return {
      type: RECEIVE_NEW_EXERCISE,
      exercise
    };
};

export const fetchExercises = () => dispatch => (
    getExercises()
        .then(exercises => dispatch(receiveExercises(exercises)))
        .catch(err => console.log(err))
);

export const fetchUserExercises = (id) => (dispatch) => (
    getUserExercises(id)
        .then(exercises => dispatch(receiveUserExercises(exercises)))
        .catch(err => console.log(err))
);

export const composeExercise = data => dispatch => (
    createExercise(data)
        .then(exercise => dispatch(receiveNewExercises(exercise)))
        .catch( err => console.log(err))
);