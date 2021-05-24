import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import selector from "../../redux/list/selectors";
import operation from "../../redux/contacts/operation";
import classes from "./ContactList.module.css";

class ContactList extends Component {
  render() {
    return (
      <>
        <TransitionGroup component="ul" className={classes.container}>
          {this.props.list.map((el) => {
            return (
              <CSSTransition key={el.id} classNames="showbutton" timeout={250}>
                <li key={el.id} className={classes.list}>
                  {el.name} : {el.number}
                  <button
                    className={classes.button}
                    type="button"
                    onClick={() => this.props.delete(el.id)}
                  >
                    Delete
                  </button>
                </li>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </>
    );
  }
}

ContactList.propTypes = {
  delete: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  list: selector.getList(state),
});
const mapDispatchToProps = {
  delete: operation.removeContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
