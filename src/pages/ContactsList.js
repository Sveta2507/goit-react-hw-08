import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import classes from "../App.module.css";
import Form from "../components/Form/Form";
import ContactList from "../components/ContactList/ContactList";
import Filter from "../components/Filter/Filter";
import { connect } from "react-redux";
import contactsOperations from "../redux/contacts/operation";
import Profile from "../components/Profile/Profile";

class Contacts extends Component {
  componentDidMount() {
    if (!this.props.isAuthenticated) {
      this.props.history.replace("/");

      return;
    }
    this.props.onFetchContact();
  }
  componentDidUpdate() {
    if (!this.props.isAuthenticated) {
      this.props.history.replace("/");

      return;
    }
  }

  render() {
    return (
      <div className={classes.container}>
        {this.props.isAuthenticated && <Profile />}
        <CSSTransition in={true} timeout={250} appear={true} unmountOnExit>
          <h1>Phonebook</h1>
        </CSSTransition>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.token,
});

const mapDispatchToProps = {
  onFetchContact: contactsOperations.fetchContact,
};
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
