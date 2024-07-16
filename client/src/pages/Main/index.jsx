import React, { useState, useEffect } from "react";
import "./main.css";
import { Account } from "../../components/shared/Account";
import { List } from "../../components/shared/List";
import { Button } from "../../components/shared/Button";
import { Slice } from "./components/Slice";
import { Label } from "../../components/shared/Label";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { canCloseAccount, getUserAccounts } from "../../slices/accounts/accountsSlice";
import { getCurrencies } from "../../slices/currencies/currenciesSlice";
import { setSelectItem } from "../../slices/accounts/accountsSlice";
import { CurrenciesList } from "./components/CurrenciesList";

export const Main = () => {
  const accounts = useSelector((state) => state.accounts.items);
  const account = useSelector((state) => state.accounts.selectItem);
  const currencies = useSelector((state) => state.currencies.value);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toCreateAccountForm = () => {
    navigate(`/main/create-new-account`);
  };

  const toTransferRevenues = () => {
    navigate(`/transfer/revenues/${account.id}`);
  };

  const toTransferExpenditure = () => {
    navigate(`/transfer/expenditure/${account.id}`);
  };

  const toTransferBetween = () => {
    navigate(`/transfer/between/${account.id}`);
  };

  const setAccount = (account) => {
    dispatch(setSelectItem(account));
  };

  const deleteAccount = () => {
    if (account.amount > 0) {
      alert('Please transfer the balance to another account')
      return
    }

    const id = Number(sessionStorage.getItem("id"))
    const form = {
      userId: id,
      accountId: account.id
    }

    dispatch(canCloseAccount(form))
  }

  useEffect(() => {
    const id = Number(sessionStorage.getItem("id"))
    dispatch(getUserAccounts(id));
    dispatch(getCurrencies());
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
              action={setAccount}
              actionForAdd={toCreateAccountForm}
            />

            <div className="option-container">
              <Button
                style="button-option"
                label="Пополнение средств"
                action={toTransferRevenues}
              />

              <Button
                style="button-option"
                label="Вывод средств"
                action={toTransferExpenditure}
              />
            </div>

            <div>
              <Label
                style="label-primary"
                image="./transfer.svg"
                text="Между своими счетами"
                action={toTransferBetween}
              />
              <Label
                style="label-primary"
                image="./close.svg"
                text="Закрыть счет"
                action={deleteAccount}
              />
            </div>
          </>
        ) : (
          <Button
            style="button-option"
            label="Создайте счет что бы начать пользоваться приложением"
            action={toCreateAccountForm}
          />
        )}
      </div>

      <div className="container main-accounts">
        <Slice label="Ваши счета" />
        <List
          style="list-account-vertical"
          add={true}
          array={accounts}
          actionForAdd={toCreateAccountForm}
        />
      </div>

      {account?.id && currencies.length ? (
        <div className="container main-currencies">
          <Slice label="Обмен валют" />
          <div className="list-currency-horizon">
            <CurrenciesList currencies={currencies} account={account} />
          </div>
        </div>
      ) : null}

      <Outlet />
    </>
  );
};
