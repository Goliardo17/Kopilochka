const { db } = require("../common/db/createDbConnection.js")

const revenuesToAccount = async (amount, accauntId) => {
  return await new Promise((resolve, reject) => {
    db.run(
      `
          UPDATE accounts
          SET amount = amount + ?
          WHERE id = ?
        `,
      [amount, accauntId],
      (err) => (err ? resolve(false) : resolve(true))
    );
    // db.close((err) => (err ? console.error(err) : null));
  });
};

const debitingFromAccount = async (amount, accauntId) => {
  return await new Promise((resolve, reject) => {
    db.run(
      `
          UPDATE accounts
          SET amount = amount - ?
          WHERE id = ?
        `,
        [amount, accauntId],
      (err) => (err ? resolve(false) : resolve(true))
    );
    // db.close((err) => (err ? console.error(err) : null));
  });
};

const transferService = {
  revenuesToAccount,
  debitingFromAccount,
};

module.exports = { transferService };