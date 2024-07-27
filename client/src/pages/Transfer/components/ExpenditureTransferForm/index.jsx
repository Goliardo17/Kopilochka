import React, { useEffect, useState } from "react";
import { Input } from "../../../../components/shared/Input";
import { Select } from "../../../../components/shared/Select";
import { Button } from "../../../../components/shared/Button";
import { form } from "../../../../../public/data";
import { useSelector, useDispatch } from "react-redux";
import { setSelectItem, changeAccountAmount } from "../../../../slices/accounts/accountsSlice";

export const ExpenditureTransferForm = ({ action }) => {
  const accounts = useSelector((state) => state.accounts.items)
  const selectedAccount = useSelector((state) => state.accounts.selectItem)
  const dispatch = useDispatch()
  
  const [amount, setAmount] = useState(0.00)

  const changeSelectFrom = (account) => {
    dispatch(setSelectItem(account))
  }

  const changeAmount = (value) => {
    if (!value.length) return setAmount('')
    const number = Number(value)

    if (number > 0) {
      setAmount(number)
      return
    }

    setAmount('')
    alert("В поле суммы можно вводить только числа")
  }

  const submitForm = () => {
    const requestForm = {...form}
    if (typeof(amount) !== "number") return
    requestForm.type = "expenditure"
    requestForm.accountIdFrom = selectedAccount.id
    requestForm.accountIdTo = 0
    requestForm.amount = Number(amount * 100).toFixed(0)
    console.log(requestForm)

    dispatch(changeAccountAmount(requestForm))
    action()
  }

  return (
    <div className="transfer">
      <div className="transfer-header-wrapper">
        <h3>Вывод средств со счета</h3>
      </div>

      <Select
        style="select-accounts"
        defaultAccount={selectedAccount}
        array={accounts}
        label="Счет для списания средств"
        action={changeSelectFrom}
      />
      <Input
        style="data"
        placeholder="Сумма в валюте счета списания" 
        type="number" 
        action={changeAmount} 
      />
      <Button
        style={"button-disabled"}
        label="Продолжить"
        action={submitForm}
      />
    </div>
  );
};
