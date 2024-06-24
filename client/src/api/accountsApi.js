import { userAccounts } from "../../../data";

export const fetchAccounts = (id) => {
  return new Promise((res) => setTimeout(() => res(userAccounts), 500));
};

export const createAccount = (id) => {

};

export const changeAmount = (transferForm) => {
  return new Promise((res) => setTimeout(() => {
    if (transferForm.type == "revenues") {
      const newUserAccounts = revenuesTransfer(transferForm)

      res(newUserAccounts)
    } else {
      const newUserAccounts = expenditureTransfer(transferForm)
      console.log(newUserAccounts)
      res(newUserAccounts)
    }
  }, 500));
};

export const transferAmount = (transferForm) => {
  return new Promise((res) => setTimeout(() => {
    const newUserAccounts = standardTransfer(transferForm)

    res(newUserAccounts)
  }, 500));
}

function standardTransfer (form) {
  const changedAccountFrom = {...form.accountFrom}
  const changedAccountTo = {...form.accountTo}

  console.log(form)

  changedAccountFrom.amount -= form.amount
  changedAccountTo.amount += form.amount * form.exchange

  const resultAccounts = userAccounts.map((account) => {
    if (account.id == changedAccountFrom.id) {
      return changedAccountFrom
    }
    
    if (account.id == changedAccountTo.id) {
      return changedAccountTo
    }

    return account
  })

  return resultAccounts
}

function revenuesTransfer (form) {
  const changedAccountTo = {...form.accountTo}
  changedAccountTo.amount += form.amount

  const resultUserAccounts = userAccounts.map((account) => {  
    if (account.id == changedAccountTo.id) {
      return changedAccountTo
    }

    return account
  })

  return resultUserAccounts  
}

function expenditureTransfer (form) {
  const changedAccountFrom = {...form.accountFrom}
  changedAccountFrom.amount -= form.amount

  const resultUserAccounts = userAccounts.map((account) => {  
    if (account.id == changedAccountFrom.id) {
      return changedAccountFrom
    }

    return account
  })

  return resultUserAccounts  
}