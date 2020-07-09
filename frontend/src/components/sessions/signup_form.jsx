import React from "react";
import { withRouter, Link } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      password2: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let userInfo = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2,
    };

    const newUser = Object.assign({}, userInfo);
    this.props.signup(newUser) 
      // .then(() => this.props.history.push("/exercises")); 
      // don't need becuase protected route will redirect to 'exercises already'
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.props.errors).map((error, i) => (
          <li className="error-message" key={`error-${i}`}>
            {this.props.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-form-container">
        <form className="session-form" onSubmit={this.handleSubmit}>
          <div className="switch-link">
            Already on Fitbook?&nbsp;&nbsp;
            <Link className="link" to="/login">
              Log in
            </Link>
          </div>
          <br />
          <div>Feel free to join!</div>
          {this.renderErrors()}
          <div>
            <br />
            <input
              className="epu-form"
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
            />
            <br />
            <input
              className="epu-form"
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="Username"
            />
            <br />
            <input
              className="epu-form"
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            <br />
            <input
              className="epu-form"
              type="password"
              value={this.state.password2}
              onChange={this.update("password2")}
              placeholder="Confirm Password"
            />
            <br />
            <input
              className="submit-button"
              type="submit"
              value="Create Account"
            />
            <br />
          </div>
        </form>
        <div className="session-img">
          <img
            src="https://mychirocdn.r.worldssl.net/article-images/create-healthy-habits-this-year-2016.png"
            alt="fitness center"
          />
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
