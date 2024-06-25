const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("base.db", (err) => {
  if (err) {
    console.log(err);
  }
});

const revenuesOnAccount = async (transferForm) => {
  return await new Promise ((resolve, reject) => {
    db.run(`
      UPDATE accounts
      SET amount = amount + ?
      WHERE id = ?
    `, [transferForm.amount, transferForm.accountTo.id],
    (err) => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

const expenditureFromAccount = async (transferForm) => {
  return await new Promise ((resolve, reject) => {
    db.run(`
      UPDATE accounts
      SET amount = amount - ?
      WHERE id = ?
    `, [transferForm.amount, transferForm.accountFrom.id],
    (err) => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

const betweenAccounts = (transferForm) => {
  if (transferForm.exchange == 1) {
    expenditureFromAccount(transferForm)
    revenuesOnAccount(transferForm)
    return
  }

  const transferFormTo = {...transferForm}
  transferFormTo.amount = transferForm.amount * transferForm.exchange
  expenditureFromAccount(transferForm)
  revenuesOnAccount(transferFormTo)
  return
}

module.exports = {
  revenuesOnAccount,
  expenditureFromAccount,
  betweenAccounts
};
