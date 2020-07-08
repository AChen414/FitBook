import React from "react";
import ReactDOM from "react-dom";

import Root from "./components/root";
import configureStore from "./store/store";
import jwt_decode from "jwt-decode";
import { setAuthToken } from "./util/session_api_util";
import { logout } from "./actions/session_actions";

//TESTING
import { 
  getExercises, 
  getExercise, 
  getUserExercises, 
  createExercise, 
  updateExercise, 
  deleteExercise 
} from './util/exercise_api_util';

import {
  getUserWorkouts,
  getUserWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout
} from './util/workout_api_util';

document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = {
      session: { isAuthenticated: true, user: decodedUser },
    };
    store = configureStore(preloadedState);
    const currentTime = Date.now() / 1000;
    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = "/login";
    }
  } else {
    store = configureStore({});
  }
  const root = document.getElementById("root");
  
  ReactDOM.render(<Root store={store} />, root);

  // for testing only
  window.getExercises = getExercises
  window.getExercise = getExercise
  window.getUserExercises = getUserExercises
  window.createExercise = createExercise
  window.updateExercise = updateExercise
  window.deleteExercise = deleteExercise

  window.getUserWorkouts = getUserWorkouts
  window.getUserWorkout = getUserWorkout
  window.createWorkout = createWorkout
  window.updateWorkout = updateWorkout
  window.deleteWorkout = deleteWorkout
});
