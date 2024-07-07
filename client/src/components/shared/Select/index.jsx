import React, { useState } from "react";
import "./styles/select-wrapper.css";
import "./styles/select-account.css";
import "./styles/select-currency.css";
import { SelectAccount } from "./components/SelectAccount";
import { SelectCurrency } from "./components/SelectCurrency";

export const Select = ({ style, defaultAccount, label, action, array }) => {
  const [item, setItem] = useState(() =>
    defaultAccount ? defaultAccount : {}
  );
  const [visibleList, setVisibleList] = useState(false);

  const changeItem = (newItem) => {
    setItem(newItem);
    action(newItem);
  };

  const hideOrShow = () => {
    setVisibleList(!visibleList);
  };

  const selectContent = () => {
    switch (style) {
      case 'select-currency':
        return <SelectCurrency style={style} item={item} label={label} array={array} vis={visibleList} action={changeItem}/>
      default:
        return <SelectAccount style={style} item={item} label={label} array={array} vis={visibleList} action={changeItem}/>
    }
  }

  return (
    <div className="select-wrapper" onClick={() => hideOrShow()}>
      {
        selectContent()
      }
    </div>
  );
};
