const { secret } = require("../../helpers/config.js");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      res.status(403).json({ error: "Пользователь не авторизован" });
      return;
    }

    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json(err.message);
  }
};

module.exports = { authMiddleware };
