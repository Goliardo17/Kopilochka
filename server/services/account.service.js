const { db } = require("../common/db/createDbConnection.js")

const getAccount = async (accountId) => {
  return await new Promise((resolve, reject) => {
    db.get(
      `
        SELECT * FROM accounts 
        WHERE id = '${accountId}'
      `,
      (err, row) => (err ? resolve([]) : resolve(row))
    );
    // db.close((err) => (err ? console.error(err) : null));
  });
}

const getUserAccounts = async (userId) => {
  return await new Promise((resolve, reject) => {
    db.all(
      `
        SELECT * FROM accounts 
        WHERE user_id = '${userId}'
      `,
      (err, rows) => (err ? resolve([]) : resolve(rows))
    );
    // db.close((err) => (err ? console.error(err) : null));
  });
};

const createAccount = async (accauntInfo) => {
  return await new Promise(() => {
    db.run(
      `
        INSERT INTO accounts (name, currency, amount, user_id) VALUES (?, ?, ?, ?)
      `,
      [accauntInfo.name, accauntInfo.currency, 0, accauntInfo.userId]
    );
    // db.close((err) => (err ? console.error(err) : console.log("closed")));
  });
};

const accountService = {
  getUserAccounts,
  createAccount,
  getAccount,
};

module.exports = { accountService };
