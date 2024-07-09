const express = require('express')
const router = express.Router()
const { accountControllers } = require('../controllers/account.controllers.js')

router.post("/accounts", async (req, res) => {
  const userId = req.body.id;

  const userAccounts = await accountControllers.getUserAccounts(userId);

  if (userAccounts.length) {
    res.status(201).send(JSON.stringify(userAccounts));
  } else {
    res.status(406).send()
  }
});

router.post("/account/create", async (req, res) => {
  const newAccount = req.body;

  const response = accountControllers.createAccount(newAccount);

  if (response) {
    res.status(201).send(JSON.stringify(true));
  } else {
    res.status(400).send(JSON.stringify());
  }
});

module.exports = router