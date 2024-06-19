import React from "react";

export const AddFormTransfer = ({
  submitForm,
  defaultAccount,
  accounts,
  categories,
  action
}) => {
  return (
    <div>
      <Select /> {/* acountTo */}
      <Input /> {/* categories */}
      <Input /> {/* amount for accountTo */}
    </div>
  )
}
