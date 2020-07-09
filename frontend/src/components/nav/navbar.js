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

          <button type="button" className="btn btn-default navbar-btn">
            <Link to={"/new_exercise"}>Create a Exercise</Link>
          </button>
          
          <button type="button" className="btn btn-default navbar-btn">
            <Link to={"/profile"}>Profile</Link>
          </button>

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
          <button type="button" className="btn btn-default navbar-btn">
            <Link to={"/signup"}>Join</Link>
          </button>
          <button type="button" className="btn btn-default navbar-btn">
            <Link to={"/login"}>
              Login
            </Link>
          </button>
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
                <a href="#">
                  About Us 
                </a>
              </li>
              <li>
                <a href={"/exercises"}>Exercises</a>
              </li>
              {/* <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#">Separated link</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#">One more separated link</a></li>
              </ul>
            </li> */}
            </ul>
            {/* <form className="navbar-form navbar-left">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search"/>
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form> */}

            <ul className="nav navbar-nav navbar-right">
              <div className="nav-links">
               {this.getLinks()}
               
              </div>
              {/* <li><a href="#">Link</a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul> */}
              {/* </li> */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;



      // <div className="nav-bar-container">
      //   <div className="nav-bar-main">
      //     <div className="nav-title">
      //         <Link to="/" className="nav-logo">
      //           FitBook
      //           </Link>
      //       </div>
      //     <div className="nav-links">
      //       {this.getLinks()}
      //     </div>
      //   </div>
      // </div>