const sqlite3 = require("sqlite3").verbose();

const connect = () => {
  const db = new sqlite3.Database("base.db", (err) => {
    if (err) {
      console.log(err);
    }
  
    console.log("Account service connect");
  });

  return db
}

const getAccount = async (accountId) => {
  const db = connect()

  return await new Promise((resolve, reject) => {
    db.get(
      `
        SELECT * FROM accounts 
        WHERE id = '${accountId}'
      `,
      (err, row) => (err ? resolve([]) : resolve(row))
    );
    db.close((err) => (err ? console.error(err) : null));
  });
}

const getUserAccounts = async (userId) => {
  const db = connect()

  return await new Promise((resolve, reject) => {
    db.all(
      `
        SELECT * FROM accounts 
        WHERE user_id = '${userId}'
      `,
      (err, rows) => (err ? resolve([]) : resolve(rows))
    );
    db.close((err) => (err ? console.error(err) : null));
  });
};

const createAccount = async (accauntInfo) => {
  const db = connect()
  
  return await new Promise(() => {
    db.run(
      `
        INSERT INTO accounts (name, currency, amount, user_id) VALUES (?, ?, ?, ?)
      `,
      [accauntInfo.name, accauntInfo.currency, 0, accauntInfo.userId]
    );
    db.close((err) => (err ? console.error(err) : console.log("closed")));
  });
};

const accountService = {
  getUserAccounts,
  createAccount,
  getAccount,
};

module.exports = { accountService };
