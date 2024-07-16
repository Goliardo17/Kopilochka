const { db } = require("../common/db/createDbConnection.js");

const getAccount = async (accountId) => {
  return await new Promise((resolve, reject) => {
    db.get(
      `
        SELECT * FROM accounts 
        WHERE id = '${accountId}'
      `,
      (err, row) => (err ? resolve([]) : resolve(row))
    );
  });
};

const getUserAccounts = async (userId) => {
  return await new Promise((resolve, reject) => {
    db.all(
      `
        SELECT * FROM accounts 
        WHERE user_id = '${userId}'
      `,
      (err, rows) => (err ? resolve([]) : resolve(rows))
    );
  });
};

const createAccount = async (accauntInfo) => {
  return await new Promise(() => {
    db.run(
      `
        INSERT INTO accounts (name, currency, amount, status, user_id) VALUES (?, ?, ?, ?, ?)
      `,
      [accauntInfo.name, accauntInfo.currency, 0, "open", accauntInfo.userId]
    );
  });
};

const closedAccount = async (id) => {
  return await new Promise((resolve, reject) => {
    db.run(
      `
          UPDATE accounts
          SET status = ?
          WHERE id = ?
        `,
      ["close", id],
      (err) => {
        if (err) {
          console.log(err);
          resolve(false);
        }

        resolve(true);
      }
    );
  });
};

const accountService = {
  getUserAccounts,
  createAccount,
  getAccount,
  closedAccount,
};

module.exports = { accountService };
