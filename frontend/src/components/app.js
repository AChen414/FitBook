import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";

import MainPage from "./main/main_page";
import LoginFormContainer from "./sessions/login_form_container";
import SignupFormContainer from "./sessions/signup_form_container";
import ExercisesContainer from "./exercises/exercise_index_container"

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    
      <ProtectedRoute exact path="/exercises" component={ExercisesContainer}/>
    </Switch>
  </div>
);

export default App;
