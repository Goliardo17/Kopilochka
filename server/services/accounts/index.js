const { db } = require("../../common/db/createDbConnection");

const getById = async (accountId) => {
  if (!accountId)
    throw new Error("Не переданны все аргументы в services/accounts/getById");

  return await new Promise((resolve) => {
    db.get(
      `
        SELECT * FROM accounts 
        WHERE id = '${accountId}'
      `,
      (err, row) => (err ? resolve([]) : resolve(row))
    );
  });
};

const getByUserId = async (userId) => {
  if (!userId)
    throw new Error("Не переданны все аргументы в services/accounts/getByUsersId");

  return await new Promise((resolve) => {
    db.all(
      `
        SELECT id, name, currency, amount, status FROM accounts 
        WHERE user_id = '${userId}'
      `,
      (err, rows) => (err ? resolve([]) : resolve(rows))
    );
  });
};

const create = async (accauntInfo, userId) => {
  const { name, currency } = accauntInfo;
  if (!userId || !name || !currency)
    throw new Error("Не переданны все аргументы в services/accounts/create");

  return await new Promise((resolve) => {
    db.run(
      `
        INSERT INTO accounts (name, currency, amount, status, user_id) VALUES (?, ?, ?, ?, ?)
      `,
      [name, currency, 0, "open", userId],
      (err) => (err ? console.error(err) : resolve(true))
    );
  });
};

const close = async (accountId) => {
  if (!accountId)
    throw new Error("Не переданны все аргументы в services/accounts/close");

  return await new Promise((resolve) => {
    db.run(
      `
          UPDATE accounts
          SET status = ?
          WHERE id = ?
        `,
      ["close", accountId],
      (err) => err ? console.error(err) : resolve(true)
    );
  });
};

const accountsServices = {
  getByUserId,
  create,
  getById,
  close,
};

module.exports = accountsServices;
