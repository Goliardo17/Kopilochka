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
  
  const [transferForm, setTransferForm] = useState(() => {
    form.type = "revenues"
    return form
  })

  const changeTransferForm = (newTransferForm) => setTransferForm(newTransferForm)

  const changeSelectTo = (account) => {
    const newValue = {...transferForm}
    newValue.accountTo = account

    changeTransferForm(newValue)
    dispatch(setSelectItem(account))
    
  }

  const changeAmount = (value) => {
    const newValue = {...transferForm}

    newValue.amount = Number(value)
    changeTransferForm(newValue)
  }

  const submitForm = () => {
    const id = JSON.parse(sessionStorage.getItem("id"))
    transferForm.userId = Number(id)
    transferForm.accountTo = selectedAccount

    dispatch(changeAccountAmount(transferForm))
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
