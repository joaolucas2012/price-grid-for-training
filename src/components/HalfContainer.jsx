import React from "react";

import "./HalfContainer.css";

const HalfContainer = (props) => {
  const classes = "half-container " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default HalfContainer;
