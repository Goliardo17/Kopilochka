const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("base.db", (err) => {
  if (err) {
    console.log(err);
  }
});

const createNewUser = (user) => {
  const write = db.prepare(`
    INSERT INTO users (name, email, password) VALUES (?, ?, ?)
  `);

  write.run(user.name, user.email, user.password);
  write.finalize();
};

const createNewAccount = async (newAccount) => {
  const write = db.prepare(`
    INSERT INTO accounts (name, currency, amount, user_id) VALUES (?, ?, ?, ?)
  `);

  write.run(newAccount.name, newAccount.currency, 0, newAccount.userId);
  write.finalize();
}

const createRecordOfTransfer = (date, transferForm) => {
  const write = db.prepare(`
    INSERT INTO histories (type, acc_from, acc_to, sum, exchange, date, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)
  `);

  write.run(transferForm.type, transferForm.accountIdFrom, transferForm.accountIdTo, transferForm.amount, transferForm.exchange, date, transferForm.userId);
  write.finalize();
}

module.exports = {
  createNewUser,
  createNewAccount,
  createRecordOfTransfer
};