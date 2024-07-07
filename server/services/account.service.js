const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("base.db", (err) => {
  if (err) {
    console.log(err);
  }
});

const getUserAccounts = async (userId) => {
  return await new Promise((resolve, reject) => {
    db.all(
      `
        SELECT * FROM accounts 
        WHERE user_id = '${userId}'
      `,
      (err, rows) => err ? resolve([]) : resolve(rows)
    );
    db.close()
  });
};

const createAccount = (accauntInfo) => {
  const write = db.prepare(`
      INSERT INTO accounts (name, currency, amount, user_id) VALUES (?, ?, ?, ?)
    `);

  write.run(accauntInfo.name, accauntInfo.currency, 0, accauntInfo.userId);
  write.finalize();
};

const accountService = {
  getUserAccounts,
  createAccount
}

module.exports = {accountService}