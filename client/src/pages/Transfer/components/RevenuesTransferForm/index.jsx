import React, { useEffect, useState } from "react";
import { Input } from "../../../../ui/Input";
import { Select } from "../../../../ui/Select";
import { Button } from "../../../../ui/Button";
import { form } from "../../../../../../data";
import { useSelector, useDispatch } from "react-redux";
import { getUserAccounts, setSelectItem, changeAccountAmount } from "../../../../slices/accounts/accountsSlice";

export const RevenuesTransferForm = ({ action }) => {
  const accounts = useSelector((state) => state.accounts.items)
  const selectedAccount = useSelector((state) => state.accounts.selectItem)
  const dispatch = useDispatch()
  console.log(selectedAccount)
  
  const [transferForm, setTransferForm] = useState(() => {
    form.type = "revenues"
    return form
  })

  const changeTransferForm = (newTransferForm) => {
    setTransferForm(newTransferForm)
  }

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
    transferForm.accountTo = selectedAccount

    console.log(transferForm)

    dispatch(changeAccountAmount(transferForm))
    action()
  }

  useEffect(() => {
    const id = localStorage.getItem("id");
    dispatch(getUserAccounts(id))
  }, [])

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
