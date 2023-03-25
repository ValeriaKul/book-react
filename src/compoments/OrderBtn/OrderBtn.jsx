import React from "react";
import s from "./style.module.css";

export default function OrderBtn() {
  return (
    <div className={s.btn_container}>
      <button className={s.btn_text}>Order Today</button>
    </div>
  );
}
