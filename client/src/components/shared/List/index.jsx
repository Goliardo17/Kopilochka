import React from "react";
import { Account } from "../Account";
import { Button } from "../Button";
import addButton from "./image/add.svg";
import { Currency } from "../Currency";
import "./styles/list-currency.css"
import "./styles/list-account-vertical.css";
import "./styles/list-account-horizon.css";
import "./styles/list-currency-horizon.css";
import { Label } from "../Label";

export const List = ({ style, select, label, array, add, action, actionForAdd, account }) => {
  const list = (item, index) => {
    switch (style) {
      case "list-account-vertical":
        return (
          <Account
            key={`account-vertical-${index}`}
            style="account-view"
            account={item}
            action={action}
          />
        );

      case "list-account-horizon":
        return (
          <Account
            key={`account-horizon-${index}`}
            style="account-small"
            account={item}
            action={action}
          />
        );

      case "list-currency-horizon":
        return (
          <Currency
            key={`currency-horizon-${index}`}
            style="currency-medium"
            account={account}
            currency={item}
          />
        );
      case "list-history":
      return (
        <Label
          key={`label-view-${index}`}
          style="label-view"
          record={item}
          text={item.date}
        />
      );
      case "list-currency":
        return (
          <Currency
            key={`currency-vertical-${index}`}
            style="currency-view"
            currency={item}
            action={action}
          />
        );
      default:
        return (
          <Label 
            key={`label-view-${index}`}
            style="label-view"
            text={item}
          />
        )
    }
  };

  const buttonForAdd = () => {
    switch (style) {
      case "list-account-horizon":
        return (
          <Button 
            style="button-image border center" 
            image={addButton}
            action={actionForAdd}
          />
        )
      default:
        return (
          <Button
            style="button-image left"
            label="Создать новый счет"
            image={addButton}
            action={actionForAdd}
          />
        );
    }
  };

  return (
    <div className={`${style} ${select ? "select" : ""}`}>
      {style !== "list-account-small" && label ? <p>{label}</p> : null}

      {array.length ? array.map((item, index) => list(item, index)) : null}

      {add ? buttonForAdd() : null}
    </div>
  );
};
