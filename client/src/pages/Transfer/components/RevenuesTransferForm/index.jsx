import React, { useState } from "react";
import { Input } from "../../../../components/shared/Input";
import { Select } from "../../../../components/shared/Select";
import { Button } from "../../../../components/shared/Button";
import { form } from "../../../../../public/data";
import { useSelector, useDispatch } from "react-redux";
import { setSelectItem, changeAccountAmount } from "../../../../slices/accounts/accountsSlice";

export const RevenuesTransferForm = ({ action }) => {
  const accounts = useSelector((state) => state.accounts.items)
  const selectedAccount = useSelector((state) => state.accounts.selectItem)
  const dispatch = useDispatch()

  console.log(selectedAccount)
  
  const [amount, setAmount] = useState('')

  const changeSelectTo = (account) => dispatch(setSelectItem(account))

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
    if (typeof(amount) !== "number") return console.log(amount + ' not number')
    requestForm.type = "revenues"
    requestForm.accountIdFrom = 0
    requestForm.accountIdTo = selectedAccount.id
    requestForm.amount = Number(amount * 100).toFixed(0)

    dispatch(changeAccountAmount(requestForm))
    action()
  }

  return (
    <div className="transfer">
      <div className="transfer-header-wrapper">
        <h3>Пополнить счет</h3>
      </div>

      <Select
        style="select-accounts"
        defaultAccount={selectedAccount}
        array={accounts}
        label="Счет для зачисления средств"
        action={changeSelectTo}
      />
      <Input
        style="data"
        placeholder="Сумма в валюте счета зачисления" 
        type="number"
        value={amount}
        action={changeAmount} 
      />
      <Button
        style={"button-disabled"}
        label="Продолжить"
        action={submitForm}
      />
    </div>
  )
}
