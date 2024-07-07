import React from "react";
import "./styles/button-primary.css";
import "./styles/button-service.css";
import "./styles/button-option.css";
import "./styles/button-disabled.css";
import "./styles/button-image.css";
import "./styles/mini.css";

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
