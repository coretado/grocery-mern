import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../../store/actions/authActions";
import { Redirect } from "react-router-dom";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
  msg: null
};

class SignUp extends React.Component {
  state = { ...INITIAL_STATE };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === "REGISTER_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }

    // If authenticated, forward user
    if (isAuthenticated) return <Redirect to="/" />;
  }

  onChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    event.preventDefault();
    const { name, email, password, msg } = this.state;

    // Passing user register props from state
    this.props.register({
      name,
      email,
      password
    });
  };

  render() {
    const { name, email, password, msg } = this.state;

    return (
      <div className="row">
        <div className="col s12 m6" style={{ transform: "translateX(50%)" }}>
          <div className="card">
            <form onSubmit={this.onSubmit}>
              <div className="card-content">
                <span className="card-title center-align green-text text-accent-4">
                  Sign Up
                </span>
                <div className="row">
                  <div className="input-field col s12">
                    <span className="helper-text">Name</span>
                    <input
                      name="name"
                      type="text"
                      onChange={this.onChange}
                      value={name}
                      id="name"
                      placeholder="Jane"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <span className="helper-text">Email Address</span>
                    <input
                      name="email"
                      type="email"
                      onChange={this.onChange}
                      value={email}
                      placeholder="janedoe@gmail.com"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <span className="helper-text">Password</span>
                    <input
                      name="password"
                      type="password"
                      onChange={this.onChange}
                      value={password}
                      placeholder="Password"
                    />
                  </div>
                </div>
              </div>
              <div className="card-action right-align">
                <button
                  type="submit"
                  className="btn-small waves-effect waves-light green accent-4"
                >
                  Sign up
                </button>
              </div>
              {msg && (
                <p
                  style={{ padding: "1rem" }}
                  className="center-align red-text text-darken-1 red lighten-5"
                >
                  {msg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error.error
});

const mapDispatchToProps = {
  register
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
