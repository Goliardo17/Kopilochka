const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("base.db", (err) => {
  if (err) {
    console.log(err);
  }
});

const getUserHistory = async (userId) => {
  return await new Promise((resolve, reject) => {
    db.all(
      `
        SELECT * FROM histories 
        WHERE user_id = '${userId}'
      `,
      (err, rows) => (rows ? resolve(rows) : resolve([]))
    );
    db.close()
  });
};

const recordTransfer = (date, transferForm) => {
  const write = db.prepare(`
      INSERT INTO histories (type, acc_from, acc_to, sum, exchange, date, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)
    `);

  write.run(
    transferForm.type,
    transferForm.accountIdFrom,
    transferForm.accountIdTo,
    transferForm.amount,
    transferForm.exchange,
    date,
    transferForm.userId
  );
  write.finalize();
};

const historyService = {
  getUserHistory,
  recordTransfer,
};

module.exports = {historyService}