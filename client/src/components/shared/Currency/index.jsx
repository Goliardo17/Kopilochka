import React from "react";
import "./styles/currency-small.css";
import "./styles/currency-medium.css";
import "./styles/currency-view.css"
import { CurrencyHelper } from "./components/CurrencyHelper";
import { CurrencyPrimary } from "./components/CurrencyPrimary";
import { CurrencyView } from "./components/CurrencyView";

export const Currency = ({
  style,
  accountFrom,
  tikerFrom,
  currency,
  action
}) => {

  const selectContent = () => {
    switch (style) {
      case "currency-view":
        return <CurrencyView style={style} currency={currency} action={action}/>
      default:
        return <CurrencyPrimary 
          style={style}
          account={accountFrom}
          currency={currency}
        />
    }
  }

  return (
    <>
      {tikerFrom ? (
        <CurrencyHelper
          style={style}
          tikerFrom={tikerFrom}
          currency={currency}
        />
      ) : (
        selectContent()
      )}
    </>
  );
};
