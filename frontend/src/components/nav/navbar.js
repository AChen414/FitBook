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
          {/* <Link type="button" className="btn btn-default navbar-btn" to={"/new_exercise"}>
            Create an Exercise
            </Link> */}

          <Link type="button" className="btn btn-default navbar-btn" to={"/profile"}>
            Profile
          </Link>
        
          <button
            type="button"
            className="btn btn-default navbar-btn"
            onClick={this.logoutUser}
          >
            Logout
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <Link type="button" className="btn btn-default navbar-btn" to={"/signup"}>
              Join
          </Link>
          <Link type="button" className="btn btn-default navbar-btn" to={"/login"}>
            Log in
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">
              FitBook
            </a>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav">
              <li>
                <a href="#/about-us">About Us</a>
              </li>
              <li>
                <a href="#/exercises">Exercises</a>
              </li>
              <li>
                <a href="#/workouts">Workouts</a>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <div className="nav-links">{this.getLinks()}</div>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;


