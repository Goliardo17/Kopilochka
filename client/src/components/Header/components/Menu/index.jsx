import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.css";

export const Menu = () => {
  return (
    <div className="header-menu">
      <NavLink to="/main">Главная</NavLink>
      {/* <NavLink to="/categories"></NavLink> */}
      <a>Категории</a>
      <NavLink to="/history">История</NavLink>
    </div>
  );
};
