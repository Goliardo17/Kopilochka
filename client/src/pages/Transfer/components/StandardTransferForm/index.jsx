import React, { useEffect, useState } from "react";
import { Input } from "../../../../ui/Input";
import { Select } from "../../../../ui/Select";
import { Button } from "../../../../ui/Button";
import { form } from "../../../../../public/data";
import { useSelector, useDispatch } from "react-redux";
import { setSelectItem, transferAcountAmount } from "../../../../slices/accounts/accountsSlice";
import { getCurrencies } from "../../../../slices/currencies/currenciesSlice";

export const StandardTransferForm = ({ action }) => {
  const currencies = useSelector((state) => state.currencies.value);
  const accounts = useSelector((state) => state.accounts.items);
  const accountFrom = useSelector((state) => state.accounts.selectItem);
  const [accountTo, setAccountTo] = useState({});
  const [amountFrom, setAmountFrom] = useState();
  const [amountTo, setAmountTo] = useState();
  const [exchangeCurrency, setEchangeCurrency] = useState({});
  const [transferForm, setTransferForm] = useState(() => {
    form.type = "between";
    return form;
  });
  const dispatch = useDispatch();

  const checkExchange = (changedAccountFrom, changedAccountTo) => {
    const currencyFrom = changedAccountFrom.currency
      ? changedAccountFrom.currency
      : accountFrom.currency;
    const currencyTo = changedAccountTo.currency
      ? changedAccountTo.currency
      : accountTo.currency;

    if (currencyFrom == currencyTo) {
      setEchangeCurrency({});
      return;
    }

    const currency = currencies.filter(
      (currency) => currency.exchange.source == currencyFrom
    )[0];
    setEchangeCurrency(currency);
    setAmountTo('')
    setAmountFrom('')
  };

  const changeTransferForm = (type, account) => {
    const newValue = { ...transferForm };

    if (type === "from") {
      newValue.accountFrom = account;

      dispatch(setSelectItem(account));
      setTransferForm(newValue);
      return;
    }

    newValue.accountFrom = accountFrom;
    newValue.accountTo = account;

    setAccountTo(account);
    setTransferForm(newValue);
  };

  const changeSelectFrom = (account) => {
    changeTransferForm("from", account);
    checkExchange(account, {});
  };

  const changeSelectTo = (account) => {
    changeTransferForm("to", account);
    checkExchange({}, account);
  };

  const changeAmount = (type, value) => {
    const newForm = { ...transferForm };

    if (!exchangeCurrency.exchange) {
      setAmountFrom(value)
      setAmountTo(value)
      return
    }

    newForm.exchange =
      exchangeCurrency.exchange.quotes[
        `${accountFrom.currency + accountTo.currency}`
      ];

    if (type === "to") {
      const amoutExchange = Number(value / newForm.exchange);
      setAmountTo(value);
      setAmountFrom(Number(amoutExchange).toFixed(2));
      return;
    }

    const amoutExchange = value * newForm.exchange;
    setAmountFrom(value);
    setAmountTo(Number(amoutExchange).toFixed(2));
  };

  const changeAmountFrom = (value) => changeAmount("from", value);

  const changeAmountTo = (value) => changeAmount("to", value);

  const submitForm = () => {
    const id = JSON.parse(sessionStorage.getItem("id"));
    transferForm.userId = Number(id);
    transferForm.accountFrom = accountFrom;
    transferForm.exchange = exchangeCurrency.exchange ? Number(
      exchangeCurrency.exchange.quotes[
        `${transferForm.accountFrom.currency + transferForm.accountTo.currency}`
      ]
    ).toFixed(2) : exchangeCurrency.exchange = 1
    transferForm.amount = Number(amountFrom).toFixed(2);

    dispatch(transferAcountAmount(transferForm));
    action();
  };

  useEffect(() => {
    dispatch(getCurrencies());
  }, []);

  return (
    <div className="transfer">
      <div className="transfer-header-wrapper">
        <h3>Перевод между своими счетами / Обмен валют</h3>
      </div>

      <Select
        style="select-accounts"
        defaultAccount={accountFrom}
        array={accounts}
        label="Счет для списания средств"
        action={changeSelectFrom}
      />
      <Select
        style="select-accounts"
        defaultAccount={accountTo}
        array={accounts}
        label="Счет для зачисления средств"
        action={changeSelectTo}
      />
      {exchangeCurrency.exchange ? (
        <Input
          style="data"
          placeholder="Сумма в валюте счета зачисления"
          type="number"
          value={amountTo}
          action={changeAmountTo}
        />
      ) : null}
      <Input
        style="data"
        placeholder="Сумма в валюте счета списания"
        type="number"
        value={amountFrom}
        action={changeAmountFrom}
      />
      <Button
        style={"button-disabled"}
        label="Продолжить"
        action={submitForm}
      />
    </div>
  );
};
