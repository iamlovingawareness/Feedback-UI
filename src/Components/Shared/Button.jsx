import React from "react";

const Button = ({ text, version, type, isDisabled }) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {text}
    </button>
  );
};

export default Button;
