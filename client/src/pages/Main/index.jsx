import React, { useState, useEffect } from "react";
import "./main.css";
// Components
import { Account } from "../../ui/Account";
import { List } from "../../ui/List";
import { Button } from "../../ui/Button";
import { Slice } from "./components/Slice";
import { Currency } from "../../ui/Currency";
import { Label } from "../../ui/Label";
import { Modal } from "../../ui/Modal";
import { Outlet, Navigate } from "react-router-dom"

const userAccounts = [
  {
    // id: 1,
    name: "Первый счет пользователя",
    currency: "USD",
    amount: 100.00
  },
  {
    // id: 2,
    name: "Первый счет пользователя",
    currency: "RUB",
    amount: 50.00
  }
]

export const Main = () => {
  const [account, setAccount] = useState(userAccounts[0]);
  const [accounts, setAccounts] = useState(userAccounts);
  const [currencies, setCurrencies] = useState([]);

  // изменить состояние данных профиля
  const changeProfileInfo = (data) => {
    const accountsList = data.accounts;
    const currenciesList = data.currencies;

    setAccounts(accountsList);
    setCurrencies(currenciesList);
  };

  useEffect(() => {
    const id = localStorage.getItem("id");
    const userInfo = undefined // getUserInfo(id);

    userInfo ? changeProfileInfo(userInfo) : null
  }, []);

  return (
    <>
      <div className="container main-account">
        {accounts.length ? (
          <>
            <Account style="account-medium" account={account} />
            <List 
              style="list-account-horizon" 
              add={true} 
              array={accounts} 
            />

            <div className="option-container">
              <Button style="button-option" label="Пополнение средств" />

              <Button style="button-option" label="Вывод средств" />
            </div>

            <div>
              <Label
                style="label-primary"
                image="./transfer.svg"
                text="Между своими счетами"
              />
            </div>
          </>
        ) : (
          <Button
            style="button-option"
            label="Создайте счет что бы начать пользоваться приложением"
          />
        )}
      </div>

      <div className="container main-accounts">
        <Slice label="Ваши счета" />
        <List style="list-account-vertical" add={true} array={accounts} />
      </div>

      <Outlet/>
    </>
  );
};
