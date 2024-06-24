import React, { useEffect, useState } from "react";
import { Input } from "../../../../ui/Input";
import { Select } from "../../../../ui/Select";
import { Button } from "../../../../ui/Button";
import { form } from "../../../../../../data";
import { useSelector, useDispatch } from "react-redux";
import { getUserAccounts, setSelectItem, changeAccountAmount } from "../../../../slices/accounts/accountsSlice";

export const ExpenditureTransferForm = ({ action }) => {
  const accounts = useSelector((state) => state.accounts.items)
  const selectedAccount = useSelector((state) => state.accounts.selectItem)
  const dispatch = useDispatch()
  console.log(selectedAccount)
  
  const [transferForm, setTransferForm] = useState(() => {
    form.type = "expenditure"
    return form
  })

  const changeTransferForm = (newTransferForm) => {
    setTransferForm(newTransferForm)
  }

  const changeSelectFrom = (account) => {
    const newValue = {...transferForm}
    newValue.accountFrom = account

    changeTransferForm(newValue)
    dispatch(setSelectItem(account))
    
  }

  const changeAmount = (value) => {
    const newValue = {...transferForm}

    newValue.amount = Number(value)
    changeTransferForm(newValue)
  }

  const submitForm = () => {
    transferForm.accountFrom = selectedAccount

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
