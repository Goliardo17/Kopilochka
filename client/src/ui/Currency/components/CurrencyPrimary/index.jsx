import React from "react";

export const CurrencyPrimary = ({ style, account, currency }) => {
  const set = () => {
    const quotes = account.quotes
    
    return quotes[`${account.data.currency}${currency.exchange.source}`]
  }

  return (
    <>
      {currency.name &&
      currency.exchange.source !== account.data.currency ? (
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
      ) : null}
    </>
  );
};
