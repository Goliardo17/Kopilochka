import React, { useState } from "react"
import { Button } from "../../../Button"
import { Input } from "../../../Input"
import { Select } from "../../../Select"
import { Link } from "react-router-dom"
// import { createNewAccount } from "../../../../../api/createNewAccount"

const currencies = [
  {
    id: 1, 
    name: "USD", 
    currency: "USD", 
    exchange: 0.00
  }, 
  {
    id: 2, 
    name: "RUB", 
    currency: "RUB", 
    exchange: 0.00
  }
]

// currencyAccount содержит id валюты !!!
export const NewAccountForm = ({ back }) => {
  const [nameAccount, setNameAccount] = useState('')
  const [currencyAccount, setCurrencyAccount] = useState('')

  const changeNameAccount = (string) => {
    setNameAccount(string)
  }

  const changeCurrencyAccount = (currency) => {
    setCurrencyAccount(currency)
  }

  const sendNewAccount = () => {
    const newAccount = {
      userId: 1,
      name: nameAccount,
      currency: currencyAccount
    }

    createNewAccount(newAccount)
  }
  
  return (
    <div className="container modal-new-account">
      <div className="modal-header">
        <Link to="/main">
          <Button 
            style="button-service" 
            label='На Главную'
          />
        </Link>
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
          style='select-currency-vertical'
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