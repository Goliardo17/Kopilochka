import React from "react";

export const CurrencyHelper = ({ style, tikerFrom, currency }) => {
  const set = () => {
    const quotes = currency.exchange.quotes;
    console.log(quotes);

    return quotes[`${tikerFrom}${currency.exchange.source}`];
  };

  return (
    <>
      <div className={style}>
        <img src={currency.image} />
        <div className="currency-content">
          <p>{currency.name}</p>

          {style === "currency-small" ? (
            <p>{currency.exchange.source}</p>
          ) : (
            <p>{`${set()} ${currency.exchange.source}`}</p>
          )}
        </div>
      </div>
    </>
  );
};
