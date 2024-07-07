const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("base.db", (err) => {
  if (err) {
    console.log(err);
  }
});

const revenuesToAccount = async (transferForm) => {
    return await new Promise((resolve, reject) => {
      db.run(
        `
          UPDATE accounts
          SET amount = amount + ?
          WHERE id = ?
        `,
        [transferForm.amount, transferForm.accountIdTo],
        (err) => err ? resolve(false) : resolve(true)
      );
      db.close()
    });
  };
  
  const debitingFromAccount = async (transferForm) => {
    return await new Promise((resolve, reject) => {
      db.run(
        `
          UPDATE accounts
          SET amount = amount - ?
          WHERE id = ?
        `,
        [transferForm.amount, transferForm.accountIdFrom],
        (err) => err ? resolve(false) : resolve(true)
      );
      db.close()
    })
  };

const transferService = {
    revenuesToAccount,
    debitingFromAccount
  }

  module.exports = {transferService}