import React from "react";
import { Button } from "../../components/shared/Button";
import { RevenuesTransferForm } from "./components/RevenuesTransferForm"
import { ExpenditureTransferForm } from "./components/ExpenditureTransferForm"
import { StandardTransferForm } from "./components/StandardTransferForm"
import "./styles/transfer.css";
import { useNavigate, useParams } from "react-router-dom";

export const Transfer = () => {
  const navigate = useNavigate()
  const { typeTransfer } = useParams()

  const toMain = () => {
    navigate("/main")
  }

  const selectTypeTransfer = () => {
    switch (typeTransfer) {
      case "revenues": return (
        <RevenuesTransferForm action={toMain} />
      )
      case "expenditure": return (
        <ExpenditureTransferForm action={toMain} />
      )
      default: return (
        <StandardTransferForm action={toMain} />
      )
    }
  }
    
  return (
    <div className={`container`}>
      <Button 
        style="button-service" 
        label="На главную" 
        action={toMain}
      />

      {
        selectTypeTransfer()
      }
    </div>
  )
}