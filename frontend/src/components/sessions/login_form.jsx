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
    this.update = this.update.bind(this);
    this.demoUser = this.demoUser.bind(this);
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
    const user = Object.assign({}, this.state)
    
    this.props.login(user)
      // .then(() => this.props.history.push("/exercises"));
  };

  demoUser(e) {
    e.preventDefault();

    const demoUser = {
      email: "demo@gmail.com",
      password: "123456"
    };

    const speed = 100;
    if (this.state.email !== demoUser.email) {
      const inputUsername = setInterval(() => {
        if (this.state.email !== demoUser.email) {
          const temp = demoUser.email.slice(0, this.state.email.length + 1);
          this.setState({ email: temp });
        } else {
          clearInterval(inputUsername);
          animatePassword()
        }
      }, speed);
    };

    const animatePassword = () => {
      if (this.state.password !== demoUser.password) {
        const inputPassword = setInterval(() => {
          if (this.state.password !== demoUser.password) {
            const temp = demoUser.password.slice(0, this.state.password.length + 1);
            this.setState({ password: temp });
          } else {
            clearInterval(inputPassword);
            this.handleSubmit();
          }
        }, speed);
      };
    };
  };

  renderEmailError() {
    return (
          <li className="error-message" key={`error-email`}>{this.props.errors['email']}</li>
    );
  };

  renderPasswordError() {
    return (
          <li className="error-message" key={`error-password`}>{this.props.errors['password']}</li>
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
          <div>
            <div className="epu-form-email">
              <input
                className="epu-form"
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
              />
              {this.renderEmailError()}
            </div>
            <br />
              <div className="epu-form-password">
                <input
                  className="epu-form"
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  placeholder="Password"
                />
                {this.renderPasswordError()} 
              </div>
            <br />
            <input className="submit-button" type="submit" value="Log in" />
            <br />
            <button
              className="submit-button"
              onClick={this.demoUser}
              type="button">Demo user
            </button>
          </div>
        </form>
        {/* <div className="session-img">
          <img
            src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="fitness center"
          />
        </div> */}
      </div>
    );
  };
};

export default withRouter(LoginForm);