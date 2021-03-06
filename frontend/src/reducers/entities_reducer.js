import {combineReducers} from 'redux';

import exercisesReducer from './exercises_reducer';
import workoutsReducer from './workouts_reducer';
import commentsReducer from './comments_reducer';
import usersReducer from './user_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  exercises: exercisesReducer,
  workouts: workoutsReducer,
  comments: commentsReducer,
});

export default entitiesReducer