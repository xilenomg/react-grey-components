import React from "react";
import "../buttons.scss";
import "./style.scss";

const ButtonQuaternary = ({ children, ...props }) => {
  return (
    <button className="btn btn-quaternary" {...props}>
      {children}
    </button>
  );
};

export default ButtonQuaternary;
