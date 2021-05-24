import { NavLink } from "react-router-dom";
import routes from "../route";
import classes from "../components/ContactList/ContactList.module.css";
import { connect } from "react-redux";
import React, { Component } from "react";

class Home extends Component {
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

  render() {
    return (
      <div className="container">
        <div>
          <h1>Home</h1>
          <NavLink to={routes.Login}>
            <button className={classes.button}>Log In</button>
          </NavLink>
          <NavLink to={routes.Register}>
            <button className={classes.button}>Register</button>
          </NavLink>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.token,
});

export default connect(mapStateToProps, null)(Home);
