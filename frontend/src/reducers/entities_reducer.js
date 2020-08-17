import {combineReducers} from 'redux';

import exercisesReducer from './exercises_reducer'
import workoutsReducer from './workouts_reducer'
import commentsReducer from './comments_reducer';

const entitiesReducer = combineReducers({
  exercises: exercisesReducer,
  workouts: workoutsReducer,
  comments: commentsReducer,
});

export default entitiesReducer