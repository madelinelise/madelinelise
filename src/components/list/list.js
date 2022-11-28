import React from "react";
import "./list.scss";

export const List = (props) => {
  const { items } = props;
  const listItems = items.map((item) => (
    <li>
      {item.url ? (
        <a href={`${item.url}`} target="_blank">{item.title}</a>
      ) : (
        <span>{item.title}</span>
      )}
    </li>
  ));
  return <ul className="list">{listItems}</ul>;
};
