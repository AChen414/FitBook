import { combineReducers } from "redux";

import SessionErrorsReducer from "./session_errors_reducer";
import workoutErrorsReducer from './workout_errors_reducer';

export default combineReducers({
  session: SessionErrorsReducer,
  workout: workoutErrorsReducer
});
