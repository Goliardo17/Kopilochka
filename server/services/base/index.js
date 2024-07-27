const { db } = require("../../common/db/createDbConnection");
const fs = require("fs");

const createUsersTable = async () => {
  return await new Promise((resolve, reject) => {
    db.run(
      `
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        password TEXT NOT NULL
      );
    `,
      (err) => (err ? console.error(err) : resolve())
    );
  });
};

const createAccountsTable = async () => {
  return await new Promise((resolve, reject) => {
    db.run(
      `
      CREATE TABLE IF NOT EXISTS accounts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        currency TEXT NOT NULL,
        amount INTEGER NOT NULL,
        status TEXT NOT NULL,
        user_id INTEGER NOT NULL
      );
    `,
      (err) => (err ? console.error(err) : resolve())
    );
  });
};

const createHistoryTable = async () => {
  return await new Promise((resolve, reject) => {
    db.run(
      `
      CREATE TABLE IF NOT EXISTS histories (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        type TEXT NOT NULL,
        acc_from INTEGER NOT NULL,
        acc_to INTEGER NOT NULL,
        sum REAL NOT NULL,
        exchange REAL NOT NULL,
        date TEXT,
        user_id INTEGER NOT NULL
      );
    `,
      (err) => (err ? console.error(err) : resolve())
    );
  });
};

const create = async () => {
  await createUsersTable();
  await createAccountsTable();
  await createHistoryTable();
};

const baseServices = {
  create
};

module.exports = baseServices
