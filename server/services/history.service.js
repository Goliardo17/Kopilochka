const sqlite3 = require("sqlite3").verbose();

const connect = () => {
  const db = new sqlite3.Database("base.db", (err) => {
    if (err) {
      console.log(err);
    }
  
    console.log("History service connect");
  });

  return db
}

const getUserHistory = async (userId) => {
  const db = connect()

  return await new Promise((resolve, reject) => {
    db.all(
      `
        SELECT * FROM histories 
        WHERE user_id = '${userId}'
      `,
      (err, rows) => (rows ? resolve(rows) : resolve([]))
    );
    db.close((err) => (err ? console.error(err) : null));
  });
};

const recordTransfer = async (date, transferForm, exchange = 1) => {
  const db = connect()
  
  return await new Promise(() => {
    db.run(
      `INSERT INTO histories (type, acc_from, acc_to, sum, exchange, date, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        transferForm.type,
        transferForm.accountIdFrom,
        transferForm.accountIdTo,
        transferForm.amount,
        exchange,
        date,
        transferForm.userId,
      ]
    );
    db.close((err) => (err ? console.error(err) : null));
  });
};

const historyService = {
  getUserHistory,
  recordTransfer,
};

module.exports = { historyService };
