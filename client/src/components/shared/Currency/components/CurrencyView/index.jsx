import React from "react"

export const CurrencyView = ({ currency, action }) =>{
  return (
    <div className="currency-view" onClick={() => action ? action(currency) : null}>
      <div>
        <p>{currency.name}</p>
        <p>{currency.exchange.source}</p>
      </div>
      <img src={currency.image} />
    </div>
  )
}