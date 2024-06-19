import React from "react"
import { NewAccountForm } from "./components/NewAccountForm"
import { NewCategoryForm } from "./components/NewCategoryForm"

export const Modal = ({ type, back }) => {  
  const selectModal = () => {
    switch (type) {
      case "modal-new-account":
        return (
          <NewAccountForm 
            back={back} 
          />
        )
      case "modal-new-category":
        return (
          <NewCategoryForm 
            back={back} 
          />
        )
    }
  }

  const element = selectModal()
  
  return (
    <>
      {/* {
        element
      } */}
    </>
  )
}