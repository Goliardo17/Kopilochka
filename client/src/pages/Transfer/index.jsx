import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button } from "../../ui/Button";
import { Currency } from "../../ui/Currency";
import { Select } from "../../ui/Select";
import { Input } from "../../ui/Input";
import "./styles/transfer-add.css";
import "./styles/transfer-subtract.css";
import "./styles/transfer.css";

// получить список счетов пользователя
// получить список доступных категорий

export const Transfer = ({ typeTransfer, defaultAccount }) => {
  const [formTransfer, setFormTransfer] = useState({
    idAccountFrom: null,
    idAccountTo: null,
    category: null,
    amount: 0.00,
    exchange: 1,
  })

  const changeFormTransfer = (key, value) => {
    const firstStateForm = {...formTransfer}

    firstStateForm[key] = value

    setFormTransfer(firstStateForm)
  }

  const textHeader = () => {
    switch (typeTransfer) {
      case "add": return "Пополнить счет"
      case "withdrow": return "Вывод средств со счета"
      default: return "Перевод средств между своими счетами / Обмен валют"
    }
  }

  const selectTypeTransfer = () => {
    switch (typeTransfer) {
      case "add": return (
        <AddTransferForm 
          submitForm={changeFormTransfer}
          defaultAccount={defaultAccount} 
          accounts={[]} 
          categoriesList={[]}
          action={[]}
        />
      )
      case "withdrow": (
        <WithdrowTransferForm 
          defaultAccount={defaultAccount}
          submitForm={changeFormTransfer}
          accounts={[]} 
          categoriesList={[]}
          action={[]}
        />
      )
      default: (
        <StandardTransferForm
          accounts={[]}
          submitForm={changeFormTransfer}
          daefoultAccount={[]}
          action={[]}
        />
      )
    }
  }
    
  return (
    <div className="container">
      <div className={`transfer-${typeTransfer}`}>
        <Button style="button-service" label="На главную" />

        <div className="transfer-header-wrapper">
          <h3>{textHeader()}</h3>
          <Currency />
        </div>

        {
          selectTypeTransfer()
        }

        <Button
          style={"button-disabled"}
          label="Продолжить"
          action={[]}
        />
      </div>
    </div>
  );
};


// { ? (
//   <Select
//     style="select-account"
//     defaultAccount={defaultAccount}
//     label="Куда зачислять средства"
//     array={[]}
//     action={[]}
//   />
// ) : null}

// {transfer.idAccountTo !== "default" || formTransfer == "transfer" ? (
//   <Select
//     style="select-account"
//     defaultAccount={defaultAccount}
//     label="Куда зачислять средства"
//     array={[]}
//     action={[]}
//   />
// ) : null}