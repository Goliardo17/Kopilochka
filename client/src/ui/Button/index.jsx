import React from "react";
import "./button-primary.css";
import "./button-service.css";
import "./button-option.css";
import "./button-disabled.css";
import "./button-image.css";
import "./mini.css";

export const Button = ({ style, label, image, action }) => {
  return (
    <button
      className={style}
      style={{
        backgroundImage: `url(${image})`
      }}
      onClick={() => action()}
    >
      {label}
    </button>
  );
};
