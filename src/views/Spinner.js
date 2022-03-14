import React, { Fragment } from "react";
import spinner from "../assets/spinner.gif";

export default () => (
  <Fragment>
    <img
      src={spinner}
      alt="Loading..."
      style={{ left: "50%", top: "50%", position: "fixed" }}
    />
  </Fragment>
);
