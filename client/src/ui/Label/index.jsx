import React from "react";
import "./styles/label-option.css";
import "./styles/label-primary.css";
import "./styles/label-secondary.css";
import "./styles/label-view.css";

export const Label = ({ style, image, text, record, action }) => {
  const getDate = () => {
    const ms = Number(text);
    const date = new Date(ms);

    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  return (
    <div className={style} onClick={() => action()}>
      <div className="label-image-wrapper">
        <img src={image} />
      </div>
      {record ? (
        <div>
          <p>{record.type}</p>
          <p>{record.sum}</p>
          <p>{getDate()}</p>
        </div>
      ) : (
        <p>{text}</p>
      )}
    </div>
  );
};
