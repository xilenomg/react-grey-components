import React from "react";
import "../buttons.scss";
import "./style.scss";

const ButtonTertiary = ({ children, ...props }) => {
  return (
    <button className="btn btn-tertiary" {...props}>
      {children}
    </button>
  );
};

export default ButtonTertiary;
