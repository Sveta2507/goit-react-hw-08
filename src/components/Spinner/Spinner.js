import React from "react";
import Spinner from "react-loader-spinner";

export default class Spinners extends React.Component {
  render() {
    return (
      <Spinner
        type="Watch"
        color="black"
        height={300}
        width={400}
        timeout={5000}
      />
    );
  }
}
