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

export const Main = () => {
  const [account, setAccount] = useState({});
  const [accounts, setAccounts] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [visibleCreateAccount, setVisibleCreateAccount] = useState(false);

  const changeVisibleCreateAccount = () => {
    setVisibleCreateAccount(!visibleCreateAccount);
  };

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
      {visibleCreateAccount ? (
        <Modal type='modal-new-account' back={changeVisibleCreateAccount} />
      ) : null}
      <div className="container main-account">
        {account.length ? (
          <>
            <Account style="account-medium" account={account} />
            <List style="list-account-horizon" add={true} array={accounts} />

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
            action={changeVisibleCreateAccount}
          />
        )}
      </div>

      <div className="container main-accounts">
        <Slice label="Ваши счета" />
        <List style="list-account-vertical" add={true} array={accounts} />
      </div>
    </>
  );
};
