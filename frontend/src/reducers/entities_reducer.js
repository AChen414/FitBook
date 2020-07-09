import {combineReducers} from 'redux';

import exercisesReducer from './exercises_reducer'
import workoutsReducer from './workouts_reducer'

const entitiesReducer = combineReducers({
  exercises: exercisesReducer,
  workouts: workoutsReducer
});

export default entitiesReducer