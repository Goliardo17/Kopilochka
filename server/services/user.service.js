const sqlite3 = require("sqlite3").verbose();

const connect = () => {
  const db = new sqlite3.Database("base.db", (err) => {
    if (err) {
      console.error(err);
    }

    console.log("User service connect to base");
  });

  return db;
};

const createNewUser = (user) => {
  const db = connect();

  const write = db.prepare(`
      INSERT INTO users (name, email, password) VALUES (?, ?, ?)
    `);

  write.run(user.name, user.email, user.password);
  write.finalize();

  db.close((err) => (err ? console.error(err) : console.log("close create user")));
};

const getUser = async (userInfo) => {
  const db = connect();

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

    db.close((err) => (err ? console.error(err) : console.log("close get user")));
  });
};

const userService = {
  createNewUser,
  getUser,
};

module.exports = { userService };
