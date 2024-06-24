import React from "react";
import "./styles/currency-small.css";
import "./styles/currency-medium.css";
import { CurrencyHelper } from "./components/CurrencyHelper";
import { CurrencyPrimary } from "./components/CurrencyPrimary";

export const Currency = ({
  style,
  accountFrom,
  tikerFrom,
  currency,
  action,
}) => {
  return (
    <>
      {tikerFrom ? (
        <CurrencyHelper
          style={style}
          tikerFrom={tikerFrom}
          currency={currency}
        />
      ) : (
        <CurrencyPrimary 
          style={style}
          account={accountFrom}
          currency={currency}
        />
      )}
    </>
  );
};
