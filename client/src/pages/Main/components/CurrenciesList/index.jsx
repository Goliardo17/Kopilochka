import React from "react";
import { Currency } from "../../../../ui/Currency";

export const getQuotes = (currencies, account) => {
  return currencies.filter((currency) => currency.exchange.source == account.currency)
}

export const CurrenciesList = ({ currencies, account }) => {
  const quotes = getQuotes(currencies, account)

  return (
    <>
        {currencies.map((currency) => (
          <Currency
            key={`currency-horizon-${currency.id}`}
            style="currency-medium"
            currency={currency} 
            accountFrom={{
              data: account,
              quotes: quotes[0].exchange.quotes
            }}
          />
        ))}
    </>
  )
}