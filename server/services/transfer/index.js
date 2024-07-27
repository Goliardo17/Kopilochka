const { db } = require("../../common/db/createDbConnection");

const revenuesToAccount = async (amount, accountId) => {
  if (!amount || !accountId)
    throw new Error(
      "Не переданны все аргументы в services/transfer/revenuesToAccount"
    );

  return await new Promise((resolve) => {
    db.run(
      `
          UPDATE accounts
          SET amount = amount + ?
          WHERE id = ?
        `,
      [amount, accountId],
      (err) => {
        if (err) {
          throw new Error(err.message);
        }

        resolve(true);
      }
    );
  });
};

const debitingFromAccount = async (amount, accountId) => {
  if (!amount || !accountId)
    throw new Error(
      "Не переданны все аргументы в services/transfer/debitingFromAccount"
    );

  return await new Promise((resolve) => {
    db.run(
      `
          UPDATE accounts
          SET amount = amount - ?
          WHERE id = ?
        `,
      [amount, accountId],
      (err) => {
        if (err) {
          throw new Error(err.message);
        }

        resolve(true);
      }
    );
  });
};

const transferServices = {
  revenuesToAccount,
  debitingFromAccount,
};

module.exports = transferServices;
