import React from "react";
import { Link } from "react-router-dom";
// import "../../../public/component/navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div>
          <Link className="nav-button-exercises"to={"/exercises"}>All Exercises</Link>
          <Link className="nav-button-profile"to={"/profile"}>Profile</Link>
          <Link className="nav-button-new-exercise"to={"/new_exercise"}>Create an Exercise</Link>
          <button onClick={this.logoutUser}>Log out</button>
        </div>
      );
    } else {
      return (
        <div>
            <Link className="nav-button-signup" to={"/signup"}>Join</Link>
            <Link className="nav-button-login" to={"/login"}>Log in</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="nav-bar-container">
        <div className="nav-bar-main">
          <div className="nav-title">
              <Link to="/" className="nav-logo">
                FitBook
                </Link>
            </div>
          <div className="nav-links">
            {this.getLinks()}
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
