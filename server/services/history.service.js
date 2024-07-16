const { db } = require("../common/db/createDbConnection.js")

const getUserHistory = async (userId) => {
  return await new Promise((resolve, reject) => {
    db.all(
      `
        SELECT * FROM histories 
        WHERE user_id = '${userId}'
      `,
      (err, rows) => (rows ? resolve(rows) : resolve([]))
    );
  });
};

const recordTransfer = async (date, transferForm, exchange = 1) => {
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
  });
};

const historyService = {
  getUserHistory,
  recordTransfer,
};

module.exports = { historyService };
