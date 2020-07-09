import {
    getExercises, getUserExercises, createExercise, getExercise, deleteExercise
} from '../util/exercise_api_util'

export const RECEIVE_EXERCISES = "RECEIVE_EXERCISES";
export const RECEIVE_USER_EXERCISES = "RECEIVE_USER_EXERCISES";
export const RECEIVE_EXERCISE = "RECEIVE_EXERCISE";
export const REMOVE_EXERCISE = "REMOVE_EXERCISE";

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

export const receiveExercise = exercise => {
    return {
      type: RECEIVE_EXERCISE,
      exercise
    };
};

export const removeExercise = exerciseId => {
    return {
        type: REMOVE_EXERCISE,
        exerciseId
    }
}

export const fetchExercises = () => dispatch => (
    getExercises()
        .then(exercises => dispatch(receiveExercises(exercises.data)))
        .catch(err => console.log(err))
);

export const fetchUserExercises = (userId) => (dispatch) => (
    getUserExercises(userId)
        .then(exercises => dispatch(receiveUserExercises(exercises.data)))
        .catch(err => console.log(err))
);

export const fetchExercise = (exerciseId) => dispatch => (
    getExercise(exerciseId)
        .then(exercise => dispatch(receiveExercise(exercise.data)))
        .catch( err => console.log(err))
)

export const composeExercise = newExercise => dispatch => (
    createExercise(newExercise)
        .then(exercise => dispatch(receiveExercise(exercise.data)))
        .catch( err => console.log(err))
);

export const deletusExercise = exerciseId => dispatch => (
    deleteExercise(exerciseId)
        .then( () => dispatch(removeExercise(exerciseId)))
        .catch( err => console.log(err))
);