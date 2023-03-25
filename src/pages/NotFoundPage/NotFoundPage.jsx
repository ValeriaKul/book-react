import React from "react";
import s from "./style.module.css";

export default function NotFoundPage() {
  return (
    <div className={s.error}>
      <img className={s.error} src="/images/error.png" alt="error" />
    </div>
  );
}
