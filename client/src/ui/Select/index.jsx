import React, { useState } from "react";
import { List } from "../List";
import toHide from "./hide.svg";
import toShow from "./show.svg";
import defaultImage from "./account.svg";
import "./select-wrapper.css";
import "./select-account.css";
import "./select-currency.css";

export const Select = ({ style, defaultAccount, label, action, array }) => {
  const [item, setItem] = useState(defaultAccount);
  const [visibleList, setVisibleList] = useState(false);

  const changeItem = (newItem) => {
    setItem(newItem);
    action(newItem.id);
  };

  const fun = () => {
    setVisibleList(!visibleList);
  };

  return (
    <div className="select-wrapper">
      <div className={style} onClick={() => fun()}>
        <div className="select-content">
          <p>{label}</p>
          {item ? (
            <>
              <p>
                {item.name}/{item.amount} {item.currency}
              </p>
            </>
          ) : null}
        </div>

        <div className="select-decorate">
          {item ? (
            <img src={item.image ? item.image : defaultImage} width="30px" />
          ) : null}
        </div>
      </div>
      {visibleList ? (
        <List
          style="list-account-vertical"
          select={true}
          array={array}
          action={changeItem}
        />
      ) : null}
    </div>
  );
};
