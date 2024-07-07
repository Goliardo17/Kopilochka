const express = require("express");
const cors = require("cors");
const app = express();

const { userControllers } = require('./controllers/user.controllers.js')
const { baseControllers } = require('./controllers/base.controllers.js')
const { accountControllers } = require('./controllers/account.controllers.js')
const { transferControllers } = require('./controllers/transfer.controllers.js')
const { historyControllers } = require('./controllers/history.controllers.js')
const { currencyControllers } = require('./controllers/currency.controllers.js')

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  baseControllers.createBase()
  next()
})

app.post("/create-user", async (req, res) => {
  const newUser = req.body;

  const response = await userControllers.createUser(newUser)

  if (response) {
    res.status(201).send(JSON.stringify(response));
  } else {
    res.status(400).send(JSON.stringify());
  }
});

app.post("/enter-to-user", (req, res) => {
  const userInfo = req.body;

  const userId = userControllers.logInUser(userInfo)

  if (userId) {
    res.status(201).send(JSON.stringify(userId));
  } else {
    res.status(400).send(JSON.stringify());
  }
});

app.post("/get-accounts", async (req, res) => {
  const userId = req.body.id

  const userAccounts = accountControllers.getUserAccounts(userId)

  res.status(201).send(JSON.stringify(userAccounts))
});

app.post("/create-new-account", async (req, res) => {
  const newAccount = req.body

  const response = accountControllers.createAccount(newAccount)

  if (response) {
    res.status(201).send(JSON.stringify(true));
  } else {
    res.status(400).send(JSON.stringify());
  }
});

app.post("/transfer-income", async (req, res) => {
  const form = req.body

  const userAccounts = transferControllers.transferToAccount(form)
  
  res.status(201).send(JSON.stringify(userAccounts))
});

app.post("/transfer-expense", async (req, res) => {
  const form = req.body

  const userAccounts = transferControllers.transferFromAccount(form)
  
  res.status(201).send(JSON.stringify(userAccounts))
});

app.post("/transfer-between", async (req, res) => {
  const form = req.body

  const userAccounts = transferControllers.transferBetweenAccounts(form)
  
  res.status(201).send(JSON.stringify(userAccounts))
});

app.post("/get-history", async (req, res) => {
  const userId = req.body.id
  
  const userHistory = historyControllers.getUserHistory(userId)

  if (userHistory) {
    res.status(201).send(JSON.stringify(userHistory))
  } else {
    res.status(400).send()
  }
});

app.get("/get-currencies", async (req, res) => {
  const currenciesJSON = currencyControllers.getCurrencies()

  res.status(201).send(currenciesJSON)
})


app.listen(3333);