import React from "react";
import "../buttons.scss";
import "./style.scss";

const ButtonSecondary = ({ children, ...props }) => {
  return (
    <button className="btn btn-secondary" {...props}>
      {children}
    </button>
  );
};

export default ButtonSecondary;
