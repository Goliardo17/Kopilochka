const sqlite3 = require("sqlite3").verbose();

const createDbConnection = () => {
  return new sqlite3.Database("base.db", (err) => {
    if (err) {
      console.error(err);
    }

    console.log("Base service connect");
  });
};

const db = createDbConnection();

module.exports = { db };