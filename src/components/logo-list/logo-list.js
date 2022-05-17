import React from "react";
import "./logo-list.scss";

export const LogoList = (props) => {
  const { items } = props;
  const logoListItems = items.map((item) => (
    <li className="logo-list-item">
      {item.url ? (
        <a href={`${item.url}`}>
          <img alt={`${item.title}`} src={`${item.img}`}/>
        </a>
      ) : (
        <img alt={`${item.title}`} src={`${item.img}`}/>
      )}
    </li>
  ));
  return <ul className="logo-list">{logoListItems}</ul>;
};
