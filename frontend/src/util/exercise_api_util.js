import axios from "axios";

export const getTweets = () => {
  return axios.get("/api/exercises");
};

export const getUserExercises = (id) => {
  return axios.get(`/api/exercises/user/${id}`);
};

export const writeExercise = (data) => {
  return axios.post("/api/exercises/", data);
};
