import React from "react";
import { withRouter, Link } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.update = this.update.bind(this);
  };

  componentDidMount(){
    this.props.clearErrors();
  };

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  };

  handleSubmit(e) {
    e.preventDefault();

    let userInfo = {
      email: this.state.email,
      password: this.state.password,
    };

    const user = Object.assign({},userInfo)
    
    this.props.login(user);
    this.props.history.push("/exercises");
  };

  renderErrors() {
    // debugger
    return (
      <ul>
        {Object.keys(this.props.errors).map((error, i) => (
          <li className="error-message" key={`error-${i}`}>{this.props.errors[error]}</li>
        ))}
      </ul>
    );
  };

  render() {
    return (
      <div className="session-form-container">
        <form className="session-form" onSubmit={this.handleSubmit}>
          <div className="switch-link">
            Want to join us?&nbsp;&nbsp;
            <Link className="link" to="/signup">
              Sign up
            </Link>
          </div>
          <br />
          <div>Please log in!</div>
          <br/>
          {this.renderErrors()}
          <div>
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
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            <br />
            <input className="submit-button" type="submit" value="Log in" />
            <br />
          </div>
        </form>
        <div className="session-img">
          <img
            src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="fitness center"
          />
        </div>
      </div>
    );
  };
};

export default withRouter(LoginForm);
