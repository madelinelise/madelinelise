import React from "react";
import PropTypes from "prop-types";
import "./contact.scss";
import { Button } from "../button/button";

export const Contact = (props) => {
  const { description, ctas } = props;
  const ctaItems = ctas.map((cta) => (
    <>
      {cta.url ? (
        <a className={["button", `button--${cta.type}`].join(" ")} target="_blank" href={`${cta.url}`}>{cta.title}</a>
      ) : (
        <Button label={cta.title} />
      )}
    </>
  ));
  return (
    <div className="contact">
      <div className="contact__item">
        <div className="contact__initials">
          mj
        </div>
        <h1 className="contact__heading"> Madeline Jensen </h1>
        {/* <Heading title={"Madeline Jensen"} headingLevel={"h1"} /> */}
      </div>
      <div className="contact__item">
        <div className="contact__description">
          <p> {description} </p>
        </div>
        <div className="contact__ctas">
          {ctaItems}
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  image: PropTypes.string.isRequired
};
