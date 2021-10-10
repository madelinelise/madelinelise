import React from "react";
import PropTypes from "prop-types";
import "./button.scss";

export const Button = ({ primary, backgroundColor, type, label, ...props }) => {
  const mode = primary ? "button--primary" : "button--secondary";
  return (
    <button
      type="button"
      className={["button", `button--${type}`, mode].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
