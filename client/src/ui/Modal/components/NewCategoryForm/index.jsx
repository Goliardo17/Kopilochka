import React, { useState } from "react"
import "./modal-new-category.css"

export const NewCategoryForm = () => {
  const [nameCategory, setNameCategory] = useState('')
  const [typeTransfer, setTypeTransfer] = useState('')

  const backToMain = () => {
    navigate("/main")
  }

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

    // createNewAccount(newCategory)
    navigate("/main")
  }

  // еще должен быть выбор картинки для категории !!!
  
  return (
    <div className="modal-new-category">
      <div>
        <Button 
          style="button-service" 
          action={backToMain}
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