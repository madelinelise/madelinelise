import React from "react";
import "./timeline.scss";

export const Timeline = (props) => {
  const { jobs } = props;
  const listItems = jobs.map((job) => (
    <li className="timeline-item">
      <div className="timeline-info">
        <span>{job.dates}</span>
      </div>
      <div className="timeline-marker"></div>
      <div className="timeline-content">
        <h3 className="timeline-title">{job.title}</h3>
        <h3 className="timeline-company">{job.company}</h3>
        <p>{job.description}</p>
      </div>
    </li>
  ));
  return (
    <ul className="timeline">
      <span> {listItems} </span>
    </ul>
  );
};
