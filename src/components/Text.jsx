import React from "react";

const Text = (props) => {
  return <p className={props.className}>{props.children}</p>;
};

export default Text;
