import React from "react";
import "./input-data.css";
import "./input-search.css";
import "./input-calendar.css";

export const Input = ({ style, type, placeholder, value, action }) => {
  return (
    <>
      <input
        className={style}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => action(e.target.value)}
      />
    </>
  );
};
