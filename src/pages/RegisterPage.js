import React, { Component } from "react";
import routes from "../route";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import operations from "../redux/auth/operations";
import classes from "../components/ContactList/ContactList.module.css";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  componentDidUpdate() {
    if (this.props.isAuthenticated) {
      this.props.history.replace("/contacts");
      return;
    }
  }

  handleSubmit = (elem) => {
    elem.preventDefault();
    this.props.onRegister({ ...this.state });
    this.setState({ name: "", email: "", password: "" });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div className="container">
        <div>
          <h1 className="title">Registration</h1>
          <form onSubmit={this.handleSubmit}>
            <label className="names">
              Your Name
              <input
                required
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
            </label>

            <label className="names">
              Your Email
              <input
                required
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </label>

            <label className="names">
              Your password
              <input
                required
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </label>
            <button className={classes.button} type="submit">
              Register
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

export default connect(mapStateToProps, {
  onRegister: operations.register,
})(Register);
