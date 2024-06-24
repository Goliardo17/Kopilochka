import React from "react";
import { Currency } from "../../../../ui/Currency";

export const CurrenciesList = ({ currencies, account }) => {
  const quotes = currencies.filter((currency) => currency.exchange.source == account.currency)[0].exchange.quotes

  return (
    <>
      {
        currencies.map((currency) => (
          <Currency
            key={`currency-horizon-${currency.id}`}
            style="currency-medium"
            currency={currency} 
            accountFrom={{
              data: account,
              quotes: quotes
            }}
          />
        ))
      }
    </>
  )
}