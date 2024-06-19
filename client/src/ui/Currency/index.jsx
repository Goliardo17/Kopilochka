import React from "react";
import "./currency-small.css"
import "./currency-medium.css"

export const Currency = ({ style, currency, action }) => {
  return (
    <div className={style}>
      <img src={currency.image} />

      <div className="currency-content">
        <p>{currency.name}</p>
        {style === "currency-small" ? <p>{currency.currency}</p> : <p>{currency.exchange} {currency.currency}</p>}
      </div>
    </div>
  );
};

// Купить / Продать доллар США