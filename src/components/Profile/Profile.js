import React from "react";
import authOp from "../../redux/auth/operations";
import { connect } from "react-redux";
import classes from "./Profile.module.scss";

const UserMenu = ({ avatar, name }) => (
  <div>
    <img src={avatar} alt="profpic" width="60" />
    <span className={classes.user}>Hey there, {name}</span>
  </div>
);

const mapStateToProps = (state) => ({
  name: state.auth.user.name,
  avatar: "https://image.flaticon.com/icons/png/128/3135/3135768.png",
});

export default connect(mapStateToProps, { onLogout: authOp.logOut })(UserMenu);
