import React from "react";
import "../stylesheets/Button.css";

const Button = (props) => {
  const isOperator = (value) => {
    return isNaN(value) && value !== "." && value !== "=";
  };

  return (
    <div
      className={`container__button ${
        isOperator(props.children) ? "operator" : null
      }`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}
    >
      {props.children}
    </div>
  );
};

export { Button };
