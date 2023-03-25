import React from "react";
import IconsHeader from "../Icons/IconsHeader";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import OrderBtn from "../OrderBtn/OrderBtn";
import s from "./style.module.css";

export default function Header() {
  return (
    <div className={s.header}>
      <div className={s.nav}>
        <Logo />
        <IconsHeader />
      </div>
      <Nav />
      <OrderBtn />
    </div>
  );
}
