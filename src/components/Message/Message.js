import React from "react";
import { CSSTransition } from "react-transition-group";
// import classes from "./Message.module.scss";

const Message = ({ isVisible }) => {
  return (
    <CSSTransition in={isVisible} timeout={250} unmountOnExit>
      <div>
        <p>Can't be added!</p>
      </div>
    </CSSTransition>
  );
};

export default Message;
