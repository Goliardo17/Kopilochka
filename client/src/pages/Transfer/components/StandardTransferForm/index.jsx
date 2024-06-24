import React, { useEffect, useState } from "react";
import { Input } from "../../../../ui/Input";
import { Select } from "../../../../ui/Select";
import { Button } from "../../../../ui/Button";
import { form } from "../../../../../../data";
import { useSelector, useDispatch } from "react-redux";
import {
  getUserAccounts,
  setSelectItem,
  transferAcountAmount
} from "../../../../slices/accounts/accountsSlice";
import { Currency } from "../../../../ui/Currency";
import { createHistory, getUserHistory } from "../../../../slices/histories/historiesSlice";

export const StandardTransferForm = ({ action }) => {
  const currencies = useSelector((state) => state.currencies.value);
  // const histories = useSelector((state) => state.histories.history);
  const accounts = useSelector((state) => state.accounts.items);
  const accountFrom = useSelector((state) => state.accounts.selectItem);
  const [accountTo, setAccountTo] = useState({});
  const [amountFrom, setAmountFrom] = useState();
  const [amountTo, setAmountTo] = useState();
  const [exchangeCurrency, setEchangeCurrency] = useState({})
  const [transferForm, setTransferForm] = useState(() => {
    form.type = "revenues";
    return form;
  });
  const dispatch = useDispatch();

  // console.log(transferForm);
  console.log("", exchangeCurrency);

  const checkExchange = (changedAccountFrom, changedAccountTo) => {
    const currencyFrom = changedAccountFrom.currency
      ? changedAccountFrom.currency
      : accountFrom.currency;
    const currencyTo = changedAccountTo.currency
      ? changedAccountTo.currency
      : accountTo.currency;

    if (currencyFrom == currencyTo) {
      setEchangeCurrency({})
      return
    }

    const currency = currencies.filter((currency) => currency.exchange.source == currencyFrom)[0]
    setEchangeCurrency(currency)
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

  // при изменении суммы счета зачисления пересчитывать сумму счета списания и наоборот
  const changeAmount = (type, value) => {
    const newForm = { ...transferForm };

    newForm.exchange = exchangeCurrency.exchange.quotes[`${accountFrom.currency + accountTo.currency}`]

    if (type === "to") {
      const amoutExchange = Number(value / newForm.exchange).toFixed(2)
      setAmountTo(value);
      setAmountFrom(amoutExchange);
      return;
    }

    const amoutExchange = (value * newForm.exchange).toFixed(2)
    setAmountFrom(value);
    setAmountTo(amoutExchange);
  };

  const changeAmountFrom = (value) => {
    changeAmount("from", value);
  };

  const changeAmountTo = (value) => {
    changeAmount("to", value);
  };

  const submitForm = () => {
    transferForm.accountFrom = accountFrom;
    transferForm.exchange = exchangeCurrency.exchange.quotes[`${transferForm.accountFrom.currency + transferForm.accountTo.currency}`]
    transferForm.amount = Number(amountFrom)

    dispatch(transferAcountAmount(transferForm));
    dispatch(createHistory(transferForm))
    action();
  };

  useEffect(() => {
    const id = localStorage.getItem("id");
    dispatch(getUserAccounts(id));
    dispatch(getUserHistory(id))
  }, []);

  return (
    <div className="transfer">
      <div className="transfer-header-wrapper">
        <h3>Перевод между своими счетами / Обмен валют</h3>
        {/* {exchangeCurrency.id ?
          <Currency 
          style="currency-medium" 
          tikerFrom={accountFrom.currency}
          currency={exchangeCurrency} 
        />
        : null
        } */}
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
      <Input
        style="data"
        placeholder="Сумма в валюте счета зачисления"
        type="number"
        value={amountTo}
        action={changeAmountTo}
      />
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
