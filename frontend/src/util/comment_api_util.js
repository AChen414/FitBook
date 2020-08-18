import axios from 'axios';

//Get All Comments for specific workout
export const getWorkoutComments = (workoutId) => {
  // debugger
  return(
  axios.get(`/api/comments/workout/${workoutId}`)
  )
}

// Create Comment
export const createComment = (data) => (
  axios.post(`/api/comments`, data)
);

//Edit Comment
export const updateComment = (data) => (
  axios.patch(`/api/comments/${data._id}`, data)
);

//Delete Comment
export const deleteComment = (commentId) => (
  axios.delete(`/api/comments/${commentId}`)
)