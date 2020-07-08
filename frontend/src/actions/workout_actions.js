import * as WorkoutAPIUtil from '../util/workout_api_util';

export const RECEIVE_USER_WORKOUTS = "RECEIVE_USER_WORKOUTS";
export const RECEIVE_WORKOUT = "RECEIVE_WORKOUT";
export const REMOVE_WORKOUT = "REMOVE_WORKOUT";
export const RECEIVE_WORKOUT_ERRORS = "RECEIVE_WORKOUT_ERRORS";

const receiveUserWorkouts = (workouts) => {
    return {
        type: RECEIVE_USER_WORKOUTS,
        workouts
    };
};

const recieveWorkout = (workout) => {
    return {
        type: RECEIVE_WORKOUT,
        workout
    };
};

const removeWorkout = (workoutId) => {
    return {
        type: REMOVE_WORKOUT,
        workoutId
    };
};

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_WORKOUT_ERRORS,
        errors
    };
};

export const fetchUserWorkouts = () => dispatch => (
    WorkoutAPIUtil.getUserWorkouts()
        .then(workouts => dispatch(receiveUserWorkouts(workouts)))
        .fail(res => dispatch(receiveErrors(res.responseJSON)))
);

export const fetchWorkout = (workoutId) => dispatch => (
    WorkoutAPIUtil.getUserWorkout(workoutId)
        .then(workout => dispatch(receiveWorkout(workout)))
        .fail(res => dispatch(receiveErrors(res.responseJSON)))
)

export const createWorkout = (workout) => dispatch => (
    WorkoutAPIUtil.createWorkout(workout)
        .then(workout => dispatch(receiveWorkout(workout)))
        .fail(res => dispatch(receiveErrors(res.responseJSON)))
)

export const updateWorkout = (workout) => dispatch => (
    WorkoutAPIUtil.updateWorkout(workout)
        .then(workout => dispatch(receiveWorkout(workout)))
        .fail(res => dispatch(receiveErrors(res.responseJSON)))
)

export const deleteWorkout = (workoutId) => dispatch => (
    WorkoutAPIUtil.deleteWorkout(workoutId)
        .then(() => dispatch(removeWorkout(workoutId)))
        .fail(res => dispatch(receiveErrors(res.responseJSON)))
)

