import React from "react";
// import { ReactComponent as SVG } from '../../assets/test1.svg';
import PropTypes from "prop-types";
import "./heading.scss";

export const Heading = (props) => {
  const { title, headingLevel } = props;
  const validHeadingLevels = ["h1", "h2", "h3", "h4", "h5", "h6"];

  const safeHeading = headingLevel ? headingLevel.toLowerCase() : "";
  const Title = validHeadingLevels.includes(safeHeading) ? safeHeading : "p";

  return (
    <>
      <div className="heading__container">
        {/* <SVG/> */}
        <Title className="heading">{title}</Title>
      </div>
    </>
  );
};

Heading.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
};
