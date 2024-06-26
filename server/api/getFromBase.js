const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("base.db", (err) => {
  if (err) {
    console.log(err);
  }
});

const checkUserEmail = async (userEmail) => {
  return await new Promise ((resolve, reject) => {
    db.get(`
      SELECT email FROM users 
      WHERE email = '${userEmail}'
    `, [], (err, rows) => {

      if (!rows) {
        resolve(false)
      }

      err ? reject(err) : resolve(true)
    })
  })
};

const checkPassword = async (response, user) => {
  const userId = await new Promise ((resolve, reject) => {
    db.get(`
      SELECT id, password FROM users 
      WHERE email = '${user.email}'
    `, [], (err, rows) => {

      if (!rows) {
        resolve(false)
      }

      if (rows.password == user.password) {
        resolve(rows.id)
      }

      reject(err)
    })
  })

  if (userId) {
    response.status(201).send(JSON.stringify(userId))
  } else {
    response.status(401).send('Что то пошло не так, повторите попытку позже')
  }
}

const getUserAccounts = async (userId) => {
  return await new Promise((resolve, reject) => {
    db.all(`
      SELECT * FROM accounts 
      WHERE user_id = '${userId}'
    `, [], (err, rows) => {
      err ? resolve([]) : resolve(rows)
    })
  })
}

const getUserHistory = async (userId) => {
  return await new Promise((resolve, reject) => {
    db.all(`
      SELECT * FROM histories 
      WHERE user_id = '${userId}'
    `, [], (err, rows) => {
      err ? reject(err) : resolve(rows)
    })
  })
}

module.exports = {
  checkUserEmail,
  checkPassword,
  getUserAccounts,
  getUserHistory
}