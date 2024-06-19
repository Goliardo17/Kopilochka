import React from "react";
import { Account } from "../Account";
import { Button } from "../Button";
import addButton from "./image/add.svg";
import { Currency } from "../Currency";
import "./list-account-vertical.css";
import "./list-account-horizon.css";
import "./list-currency-horizon.css";

export const List = ({ style, select, label, array, add, action }) => {
  const list = (item) => {
    switch (style) {
      case "list-account-vertical":
        return (
          <Account
            key={`account-vertical-${item.id}`}
            style="account-view"
            account={item}
            action={action}
          />
        );

      case "list-account-horizon":
        return (
          <Account
            key={`account-horizon-${item.id}`}
            style="account-small"
            account={item}
            action={action}
          />
        );

      case "list-currency-horizon":
        return (
          <Currency
            key={`currency-horizon-${item.id}`}
            style="currency-medium"
            currency={item}
            onClick={() => console.log(item)}
          />
        );
      default:
        return <p>{style} Такого стиля нет</p>;
    }
  };

  const buttonForAdd = () => {
    switch (style) {
      case "list-account-horizon":
        return <Button style="button-image border center" image={addButton} />;
      default:
        return (
          <Button
            style="button-image left"
            label="Создать новый счет"
            image={addButton}
          />
        );
    }
  };

  return (
    <div className={`${style} ${select ? "select" : ""}`}>
      {style !== "list-account-small" && label ? <p>{label}</p> : null}

      {array.map((item) => list(item))}

      {add ? buttonForAdd() : null}
    </div>
  );
};
