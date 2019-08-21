import React from "react";
import "../buttons.scss";
import "./style.scss";

const ButtonPrimary = ({ children, ...props }) => {
  return (
    <button className="btn btn-primary" {...props}>
      {children}
    </button>
  );
};

export default ButtonPrimary;
