import React, { useEffect, useState } from "react";
import { Input } from "../../../../components/shared/Input";
import { Select } from "../../../../components/shared/Select";
import { Button } from "../../../../components/shared/Button";
import { form } from "../../../../../public/data";
import { useSelector, useDispatch } from "react-redux";
import { setSelectItem, transferAcountAmount } from "../../../../slices/accounts/accountsSlice";
import { getCurrencies } from "../../../../slices/currencies/currenciesSlice";

export const StandardTransferForm = ({ action }) => {
  const currencies = useSelector((state) => state.currencies.value);
  const accounts = useSelector((state) => state.accounts.items);
  const selectedAccount = useSelector((state) => state.accounts.selectItem);
  const [accountTo, setAccountTo] = useState({});
  const [amountFrom, setAmountFrom] = useState();
  const [amountTo, setAmountTo] = useState();
  const [exchangeCurrency, setEchangeCurrency] = useState({});
  const dispatch = useDispatch();

  const checkExchange = (changedAccountFrom, changedAccountTo) => {
    const currencyFrom = changedAccountFrom.currency
      ? changedAccountFrom.currency
      : selectedAccount.currency;
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
    setAmountTo(0)
    setAmountFrom(0)
  };

  const changeTransferForm = (type, account) => {
    if (type === "from") {
      dispatch(setSelectItem(account));
      return;
    }

    setAccountTo(account);
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
    if (!value.length) return setAmountFrom(0)
      const number = Number(value)

      if (!number > 0) {
        setAmountFrom(0)
        return
      }

    if (!exchangeCurrency.exchange) {
      setAmountFrom(Number(number))
      setAmountTo(Number(number))
      return
    }

    if (type === "to") {
      const amoutExchange = Number(number / exchangeCurrency.exchange.quotes[`${selectedAccount.currency + accountTo.currency}`]);
      setAmountTo(Number(number));
      setAmountFrom(Number(amoutExchange).toFixed(2));
      return;
    }

    const amoutExchange = number * exchangeCurrency.exchange.quotes[`${selectedAccount.currency + accountTo.currency}`];

    setAmountFrom(Number(number));
    setAmountTo(Number(amoutExchange).toFixed(2));
  };

  const changeAmountFrom = (value) => changeAmount("from", value);

  const changeAmountTo = (value) => changeAmount("to", value);

  const submitForm = () => {
    const requestForm = {...form}
    if (typeof(amountFrom*100) !== "number") return console.log(amountFrom + ' not number')
    requestForm.type = "between"
    requestForm.accountIdFrom = selectedAccount.id;
    requestForm.accountIdTo = accountTo.id;
    requestForm.amount = Number(amountFrom * 100).toFixed(0);

    dispatch(transferAcountAmount(requestForm));
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
        defaultAccount={selectedAccount}
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
