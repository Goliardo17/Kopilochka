const { db } = require("../../common/db/createDbConnection");

const get = async (userId) => {
  if (!userId)
    throw new Error("Не переданны все аргументы в services/history/get");
  return await new Promise((resolve) => {
    db.all(
      `
        SELECT * FROM histories 
        WHERE user_id = '${userId}'
      `,
      (err, rows) => (rows ? resolve(rows) : resolve([]))
    );
  });
};

const record = async (date, transferForm, userId, exchange = 1) => {
  if (
    !date ||
    !transferForm.type ||
    transferForm.accountIdFrom === null ||
    transferForm.accountIdTo === null ||
    transferForm.amount <= 0 ||
    !userId
  )
    throw new Error("Не переданны все аргументы в services/history/record");

  return await new Promise((resolve) => {
    db.run(
      `INSERT INTO histories (type, acc_from, acc_to, sum, exchange, date, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        transferForm.type,
        transferForm.accountIdFrom,
        transferForm.accountIdTo,
        transferForm.amount,
        exchange,
        date,
        userId,
      ],
      (err) => {
        if (err) {
          throw new Error (err)
        }

        resolve(true)
      }
    );
  });
};

const historyServices = {
  get,
  record,
};

module.exports = historyServices;
