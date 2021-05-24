import React, { Component } from "react";
import routes from "../route";
import operations from "../redux/auth/operations";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import classes from "../components/ContactList/ContactList.module.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.history.replace("/contacts");

      return;
    }
  }
  componentDidUpdate() {
    if (this.props.isAuthenticated) {
      this.props.history.replace("/contacts");

      return;
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onLogin({ ...this.state });
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="container">
        <div>
          <h1>Log In</h1>

          <form onSubmit={this.handleSubmit} style={{ textAlign: "center" }}>
            <label className="names">
              Your Email
              <input
                required
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                className="input"
              />
            </label>

            <label className="names">
              Your Password
              <input
                required
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </label>

            <button className={classes.button} type="submit">
              Log In
            </button>
            <NavLink to={routes.Home}>
              <button className={classes.button}>Back</button>
            </NavLink>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.token,
});

export default connect(mapStateToProps, { onLogin: operations.logIn })(Login);
