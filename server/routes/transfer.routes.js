const express = require('express')
const router = express.Router()
const { transferControllers } = require('../controllers/transfer.controllers.js')

router.post("/transfer/income", async (req, res) => {
  const form = req.body;

  const userAccounts = await transferControllers.transferToAccount(form);

  res.status(201).send(JSON.stringify(userAccounts));
});

router.post("/transfer/expense", async (req, res) => {
  const form = req.body;

  const userAccounts = await transferControllers.transferFromAccount(form);

  res.status(201).send(JSON.stringify(userAccounts));
});

router.post("/transfer/between", async (req, res) => {
  const form = req.body;

  const userAccounts = await transferControllers.transferBetweenAccounts(form);

  res.status(201).send(JSON.stringify(userAccounts));
});

module.exports = router