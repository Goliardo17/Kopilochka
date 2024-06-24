import React, { useState } from "react"
// Data
import { currencies } from "../../../../../../data"
//
import { Button } from "../../../Button"
import { Input } from "../../../Input"
import { Select } from "../../../Select"
import { useNavigate } from "react-router-dom"
// import { createNewAccount } from "../../../../../api/createNewAccount"

// currencyAccount содержит id валюты !!!
export const NewAccountForm = () => {
  const [nameAccount, setNameAccount] = useState('')
  const [currencyAccount, setCurrencyAccount] = useState('')
  const navigate = useNavigate()

  const backToMain = () => {
    navigate("/main")
  }

  const changeNameAccount = (string) => {
    setNameAccount(string)
  }

  const changeCurrencyAccount = (currency) => {
    setCurrencyAccount(currency)
  }

  // сделать асинхронной и что бы при нажатии на кнопку после создания счета пользователя направляло на главную
  const sendNewAccount = () => {
    const newAccount = {
      userId: 1,
      name: nameAccount,
      currency: currencyAccount
    }

    console.log(newAccount)
    // createNewAccount(newAccount)
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