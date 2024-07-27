const express = require("express");
const entryRouter = express.Router();

const { controllers } = require("../controllers");
const usersRoutes = require("./usersRoutes");
const accountsRoutes = require("./accountsRoutes");
const transferRoutes = require("./transferRoutes");
const currenciesRoutes = require("./currenciesRoutes");
const historyRoutes = require("./historyRoutes");
const { authMiddleware } = require("../middlewares/authMiddleware");

entryRouter.use(async (req, res, next) => {
  await controllers.base.create();
  next();
});
entryRouter.use("/user", usersRoutes);
entryRouter.use("/accounts", authMiddleware, accountsRoutes);
entryRouter.use("/transfer", authMiddleware, transferRoutes);
entryRouter.use("/currency", authMiddleware, currenciesRoutes);
entryRouter.use("/history", authMiddleware, historyRoutes);

module.exports = entryRouter;
