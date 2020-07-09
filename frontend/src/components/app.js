import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";

import MainPage from "./main/main_page";
import LoginFormContainer from "./sessions/login_form_container";
import SignupFormContainer from "./sessions/signup_form_container";
import ExerciseIndexContainer from "./exercises/exercise_index_container"
import WorkoutIndexContainer from './workouts/workout_index_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/exercises" component={ExerciseIndexContainer} />
      <ProtectedRoute exact path="/workouts" component={WorkoutIndexContainer} />
    </Switch>
  </div>
);

export default App;
