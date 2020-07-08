import {combineReducers} from 'redux';

import exercisesReducer from './exercises_reducer'

const entitiesReducer = combineReducers({
  exercises: exercisesReducer,
});

export default entitiesReducer