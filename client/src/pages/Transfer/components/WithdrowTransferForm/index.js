import React from "react";

export const WithdrowTransferForm = ({
  defaultAccount,
  submitForm,
  accounts,
  categoriesList,
  action,
}) => {
  return (
    <div>
      <Select /> {/* accountFrom */}
      <Input /> {/* categories */}
      <Input /> {/* amount for accountFrom */}
    </div>
  );
};
