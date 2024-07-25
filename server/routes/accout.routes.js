const express = require('express')
const router = express.Router()
const { accountControllers } = require('../controllers/account.controllers.js')

router.post("/accounts", async (req, res) => {
  const {userId} = req.body;

  const userAccounts = await accountControllers.getUserAccounts(userId);

  if (userAccounts) {
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
    res.status(406).send();
  }
});

router.post("/account/close", async (req, res) => {
  const info = req.body;

  const newAccounts = await accountControllers.closedAccount(info);

  if (newAccounts.length) {
    res.status(201).json(newAccounts);
  } else {
    res.status(406).json('Ошибка');
  }
});

module.exports = router