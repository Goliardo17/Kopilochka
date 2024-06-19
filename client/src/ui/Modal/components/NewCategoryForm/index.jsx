import React, { useState } from "react"

export const NewCategoryForm = ({ back }) => {
  const [nameCategory, setNameCategory] = useState('')
  const [typeTransfer, setTypeTransfer] = useState('')

  const changeNameCategory = (string) => {
    setNameCategory(string)
  }

  const changeTypeTransfer = (type) => {
    setTypeTransfer(type)
  }

  const sendNewCategory = () => {
    const newCategory = {
      userId: 1,
      name: nameCategory,
      type: typeTransfer
    }

    createNewAccount(newCategory)
  }

  // еще должен быть выбор картинки для категории !!!
  
  return (
    <div>
      <div>
        <Button 
          style="button-service" 
          action={() => back()}
        />
        <h4>Введите данные для новой категории</h4>
      </div>

      <div>
        <Input 
          style=''
          value={value}
          placeholder='Название категории'
            action={changeNameCategory} 
        />

        <Button 
          style='button-ptimary'
          label='Создать' 
          action={sendNewCategory}
        />
      </div>
    </div>
  )
}