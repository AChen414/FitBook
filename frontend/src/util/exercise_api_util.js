import axios from "axios";

export const getExercises = () => {
  return axios.get('/api/exercises');
};

export const getExercise = (id) => {
  return axios.get(`/api/exercises/${id}`);
};

export const getUserExercises = (userId) => {
  return axios.get(`/api/exercises/user/${userId}`);
};

export const createExercise = (data) => {
  return axios.post('/api/exercises', data);
};

export const updateExercise = (data) => {
  return axios.patch(`/api/exercises/${data._id}`, data);
};

export const deleteExercise = (id) => {
  return axios.delete(`/api/exercises/${id}`);
};