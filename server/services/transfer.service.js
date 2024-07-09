const sqlite3 = require("sqlite3").verbose();

const connect = () => {
    const db = new sqlite3.Database("base.db", (err) => {
        if (err) {
          console.log(err);
        }
        console.log("Transfer service connect");
      });

      return db
}

const revenuesToAccount = async (amount, accauntId) => {
    const db = connect()
  
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
    db.close((err) => (err ? console.error(err) : null));
  });
};

const debitingFromAccount = async (amount, accauntId) => {
    const db = connect()
  
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
    db.close((err) => (err ? console.error(err) : null));
  });
};

const transferService = {
  revenuesToAccount,
  debitingFromAccount,
};

module.exports = { transferService };