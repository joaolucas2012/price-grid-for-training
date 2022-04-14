import React from "react";

import "./HalfContainer.css";

const HalfContainer = (props) => {
  return <div className="half-container">{props.children}</div>;
};

export default HalfContainer;
