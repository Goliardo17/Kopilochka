const { db } = require("../../common/db/createDbConnection")

const create = (name, email, password) => {
  const write = db.prepare(`
      INSERT INTO users (name, email, password) VALUES (?, ?, ?)
    `);

  write.run(name, email, password);
  write.finalize();
};

const get = async (email) => {
  if (!email) throw new Error ("Не указан email в services/users/get")

  return await new Promise((resolve, reject) => {
    db.get(
      `
        SELECT id, email, password FROM users 
        WHERE email = ?
      `,
      [email],
      (err, user) => {
        if (err) {
          throw new Error (err);
        }

        user ? resolve(user) : resolve(undefined);
      }
    );
  });
};

const usersServices = {
  create,
  get,
};

module.exports = usersServices