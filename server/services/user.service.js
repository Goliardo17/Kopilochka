const { db } = require("../common/db/createDbConnection.js")

const createNewUser = (name, email, password) => {
  const write = db.prepare(`
      INSERT INTO users (name, email, password) VALUES (?, ?, ?)
    `);

  write.run(name, email, password);
  write.finalize();
};

const getUser = async (userInfo) => {
  return await new Promise((resolve, reject) => {
    db.get(
      `
        SELECT id, email, password FROM users 
        WHERE email = ?
      `,
      [userInfo.email],
      (err, user) => {
        if (err) {
          console.error(err);
        }

        user ? resolve(user) : resolve();
      }
    );
  });
};

const userService = {
  createNewUser,
  getUser,
};

module.exports = { userService };
