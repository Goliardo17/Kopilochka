const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("base.db", (err) => {
  if (err) {
    console.log(err);
  }
});

const createNewUser = (user) => {
  db.run(
    `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`, 
    [user.name, user.email, user.password], (err) => {
      if (err) {
        console.log(err)
        return
      }

      console.log("user writing")
    }
  );
  db.close();
};

const getUserEmail = async (userInfo) => {
  return await new Promise((resolve, reject) => {
    db.get(
      `
        SELECT email FROM users 
        WHERE email = '${userInfo.email}'
      `,
      (err, rows) => (rows ? resolve(true) : resolve(false))
    );
    db.close();
  });
};

const getUser = async (userInfo) => {
  return await new Promise((resolve, reject) => {
    db.get(
      `
        SELECT id, email, password FROM users 
        WHERE email = '${userInfo.email}'
      `,
      (err, rows) => resolve(rows)
    );
    db.close();
  });
};

// db.close()

const userService = {
  createNewUser,
  getUserEmail,
  getUser,
};

module.exports = { userService };
