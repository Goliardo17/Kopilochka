const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");

const db = new sqlite3.Database("base.db", (err) => {
  if (err) {
    console.log(err);
  }

  console.log("Connect to base");
});

const createUsersTable = () => {
  db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        password TEXT NOT NULL
      );
    `);
  db.close()
};

const createAccountsTable = () => {
  db.run(`
      CREATE TABLE IF NOT EXISTS accounts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        currency TEXT NOT NULL,
        amount REAL NOT NULL,
        user_id INTEGER NOT NULL
      );
    `);
  db.close()
};

const createHistoryTable = () => {
  db.run(`
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
    `);
  db.close()
};

const createCategoryTable = () => {
  db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        type TEXT NOT NULL,
        name TEXT NOT NULL,
        user_id INTEGER NOT NULL
      );
    `);
  db.close()
};

const getCurrencies =
  ("../currencies/currencies.json",
  async (err, data) => {
    if (err) {
      console.log(err);
    }

    const result = fs.readFileSync("currencies/currencies.json").toString();

    return result;
  });

const  baseService = {
    createUsersTable,
    createAccountsTable,
    createCategoryTable,
    createHistoryTable,
    getCurrencies,
  };
  

module.exports = {baseService}