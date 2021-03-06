import * as WorkoutAPIUtil from '../util/workout_api_util';
import { getUserWorkouts, getWorkouts } from '../util/workout_api_util';

export const RECEIVE_WORKOUTS = "RECEIVE_WORKOUTS"; 
export const RECEIVE_USER_WORKOUTS = "RECEIVE_USER_WORKOUTS";
export const RECEIVE_WORKOUT = "RECEIVE_WORKOUT";
export const REMOVE_WORKOUT = "REMOVE_WORKOUT";
export const RECEIVE_WORKOUT_ERRORS = "RECEIVE_WORKOUT_ERRORS";

export const receiveWorkouts = workouts => {
    return {
        type: RECEIVE_WORKOUTS,
        workouts
    }
}

export const receiveUserWorkouts = (workouts) => {
    return {
        type: RECEIVE_USER_WORKOUTS,
        workouts
    };
};

export const receiveWorkout = (workout) => {
    return {
        type: RECEIVE_WORKOUT,
        workout
    };
};

export const removeWorkout = (workoutId) => {
    return {
        type: REMOVE_WORKOUT,
        workoutId
    };
};

export const receiveErrors = (errors) => {
    return {
        type: RECEIVE_WORKOUT_ERRORS,
        errors
    };
};

export const fetchWorkouts = () => dispatch => {
    getWorkouts()
        .then(workouts => dispatch(receiveWorkouts(workouts.data)))
        .catch(err => console.log(err))
}

export const fetchUserWorkouts = (userId) => dispatch => {
    return getUserWorkouts(userId)
        .then(
            workouts => dispatch(receiveUserWorkouts(workouts.data)), 
            err => dispatch(receiveErrors(err.response.data))
            )
};

export const fetchWorkout = (workoutId) => dispatch => (
    WorkoutAPIUtil.getUserWorkout(workoutId)
        .then(
            workout => dispatch(receiveWorkout(workout.data)),
            err => dispatch(receiveErrors(err.responseJSON))
            )
);

export const createWorkout = (workout) => dispatch => (
    WorkoutAPIUtil.createWorkout(workout)
        .then(
            workout => dispatch(receiveWorkout(workout.data)),
            err => dispatch(receiveErrors(err.response.data))
            )
);

export const updateWorkout = (workout) => dispatch => (
    WorkoutAPIUtil.updateWorkout(workout)
        .then(
            workout => dispatch(receiveWorkout(workout.data)),
            err => dispatch(receiveErrors(err.responseJSON))
            )
);

export const deleteWorkout = (workoutId) => dispatch => (
    WorkoutAPIUtil.deleteWorkout(workoutId)
        .then(
            () => dispatch(removeWorkout(workoutId)),
            err => dispatch(receiveErrors(err.responseJSON))
            )
);