import React, { Component } from "react";
import classes from "./Form.module.css";
import { connect } from "react-redux";
import contactOp from "../../redux/contacts/operation";
import Message from "../Message/Message";
import selector from "../../redux/list/selectors";
import authOp from "../../redux/auth/operations";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
    isVisible: false,
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const truee = this.props.list.some(
      (contact) => contact.name === this.state.name
    );
    if (truee) {
      this.setState({
        isVisible: true,
      });
      setTimeout(() => {
        this.setState({
          isVisible: false,
        });
      }, 1500);
      return;
    }
    this.props.addContact({ ...this.state });
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number, isVisible } = this.state;

    return (
      <>
        <TransitionGroup className={classes.alert}>
          <CSSTransition timeout={250} classNames={classes}>
            <div>
              <Message isVisible={isVisible} />
            </div>
          </CSSTransition>
        </TransitionGroup>

        <form
          action=""
          onSubmit={this.handleSubmit}
          className={classes.container}
        >
          <label className={classes.label} htmlFor="name">
            Name:
          </label>
          <input
            className={classes.input}
            type="text"
            placeholder="Enter your name"
            name="name"
            value={name}
            required
            onChange={this.handleChange}
          />

          <label className={classes.label} htmlFor="number">
            Number:
          </label>
          <input
            placeholder="Enter your number"
            className={classes.input}
            name="number"
            type="phone"
            value={number}
            onChange={this.handleChange}
            required
          />
          <input className={classes.button} type="submit" value="Add contact" />

          <button
            type="button"
            onClick={this.props.onLogout}
            className={classes.button}
          >
            Log Out
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  list: selector.getForm(state),
});

const mapDispatchToProps = {
  addContact: contactOp.addContact,
  onLogout: authOp.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
