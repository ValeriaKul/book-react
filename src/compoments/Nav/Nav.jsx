import React from "react";
import s from "./style.module.css";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const links = [
    { id: 1, label: "Home", to: "/" },
    { id: 2, label: "Author", to: "/author" },
    { id: 3, label: "Companies", to: "/companies" },
    { id: 4, label: "Articles", to: "/articles" },
  ];
  const isActive = ({ isActive }) => (isActive ? s.active : "");
  return (
    <nav className={s.navigation}>
      {links.map(({ id, label, to }) => (
        <NavLink className={isActive} key={id} to={to}>
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
