const { secret } = require("../../helpers/config.js");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization

    if (!token) {
        throw new Error ("Пользователь не авторизован")
    }

    const decoded = jwt.verify(token, secret)
    req.user = decoded
    next()
  } catch (err) {
    res.status(400).json(err.message);
  }
};

module.exports = { authMiddleware };
