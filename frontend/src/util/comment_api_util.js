import axios from 'axios';

//Get All Comments for specific workout
export const getWorkoutComments = (workoutId) => {
  debugger
  return(
  axios.get(`/api/workouts/${workoutId}/comments`)
  )
}

// Create Comment
export const createComment = (workoutId, data) => (
  axios.post(`/api/workouts/${workoutId}/comments`, data)
);

//Edit Comment
export const updateComment = (workoutId, data) => (
  axios.patch(`/api/workouts/${workoutId}/comments/${data._id}`, data)
);

//Delete Comment
export const deleteComment = (workoutId, commentId) => (
  axios.delete(`/api/workouts/${workoutId}/comments/${commentId}`)
)