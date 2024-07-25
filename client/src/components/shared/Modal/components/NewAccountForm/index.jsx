import React, { useState } from "react"
import { Button } from "../../../Button"
import { Input } from "../../../Input"
import { Select } from "../../../Select"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { createAccount } from "../../../../../slices/accounts/accountsSlice"

export const NewAccountForm = () => {
  const currencies = useSelector((state) => state.currencies.value)
  const [nameAccount, setNameAccount] = useState('')
  const [currencyAccount, setCurrencyAccount] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const backToMain = () => {
    navigate("/main")
  }

  const changeNameAccount = (string) => {
    setNameAccount(string)
  }

  const changeCurrencyAccount = (currency) => {
    setCurrencyAccount(currency)
  }

  const sendNewAccount = () => {
    const id = sessionStorage.getItem("id")

    const newAccount = {
      userId: id,
      name: nameAccount,
      currency: currencyAccount.exchange.source
    }
    console.log(newAccount)

    dispatch(createAccount(newAccount))
    navigate("/main")
  }
  
  return (
    <div className="container modal-new-account">
      <div className="modal-header">
        <Button 
          style="button-service" 
          label='На Главную'
          action={backToMain}
        />
        <h4>Введите данные нового счета</h4>
      </div>

      <div className="modal-content">
        <Input 
          style=''
          value={nameAccount}
          placeholder='Название счета'
          action={changeNameAccount} 
        />

        <Select 
          style='select-currency'
          value={currencyAccount}
          label='Валюта счета'
          array={currencies} 
          action={changeCurrencyAccount}
        />

        <Button 
          style='button-primary'
          label='Создать' 
          action={sendNewAccount}
        />
      </div>
    </div>
  )
}