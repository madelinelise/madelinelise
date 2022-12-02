import React from "react";
import PropTypes from "prop-types";
import "./body-text.scss";

export const BodyText = (props) => {
  const { description } = props;
  return <div dangerouslySetInnerHTML={{ __html: description }} />
};

BodyText.propTypes = {
  description: PropTypes.string.isRequired,
};

