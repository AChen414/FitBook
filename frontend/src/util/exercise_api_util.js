import axios from "axios";

export const getExercises = () => {
  return axios.get("/api/exercises");
};

export const getUserExercises = (id) => {
  return axios.get(`/api/exercises/user/${id}`);
};

export const createExercise = (data) => {
  return axios.post("/api/exercises/", data);
};


export const updateExercise = (data) => {
  return axios.patch(`api/exercises/user/${data.id}`, data);
};

export const deleteExercise = (data) => {
  return axios.delete(`api/exercise/user/${data}`);
};