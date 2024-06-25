const express = require("express");
const cors = require("cors");
const app = express();

const { createBase } = require("./api/createBase.js");
const { checkUserEmail, checkPassword, getUserAccounts, getUserHistory } = require("./api/getFromBase.js");
const { createNewUser, createNewAccount, createRecordOfTransfer } = require("./api/insertInBase.js");
const { revenuesOnAccount, expenditureFromAccount, betweenAccounts } = require("./api/changeInBase.js");

// createBase()

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.url)
  next()
})

// const user = {
//     name: 'Aleksandr',
//     email: 'testing@server.localHost',
//     password: '171200'
// }

// const secondUser = (
//   name: "Anna",
//   email: "stars@fish.analitics",
//   password: "6j6j6j"
// )

// const secondUser = (
//   name: "Varvara",
//   email: "chinchila@mex.fun",
//   password: "runbymy"
// )

app.post("/create-user", async (req, res) => {
  const newUser = req.body;

  const check = await checkUserEmail(newUser.email);

  if (check) {
    res.status(400).send(JSON.stringify("Аккаунт уже существует"));
  } else {
    createNewUser(newUser);
    res.status(201).send(JSON.stringify(true));
  }
});

app.post("/enter-to-user", async (req, res) => {
  const user = req.body;

  const check = await checkUserEmail(user.email);

  if (!check) {
    res.status(400).send(JSON.stringify("Аккаунта не существует"));
  } else {
    checkPassword(res, user);
  }
});

// const userId = 1

app.get("/get-history", async (req, res) => {
  const userId = req.body;

  const userHistory = await getUserHistory(userId)

  if (userHistory) {
    res.status(201).send(JSON.stringify(userHistory))
  } else {
    res.status(400).send()
  }
});

app.post("/get-accounts", async (req, res) => {
  const userId = req.body.id

  const accounts = await getUserAccounts(userId)

  if (accounts.length) {
    const response = accounts.length ? accounts : [accounts]
    res.status(201).send(JSON.stringify(response))
  }

  res.status(201).send()
});

// const newAccount = {
//   userId: Number(1),
//   name: String("First account"),
//   image: String("/"),
//   currency: Number("RUB")
// };

app.post("/create-new-account", async (req, res) => {
  const newAccount = req.body

  await createNewAccount(newAccount)

  const userAccounts = await getUserAccounts(newAccount.userId)

  if (userAccounts.length) {
    const response = userAccounts.length ? userAccounts : [userAccounts]
    res.status(201).send(JSON.stringify(response))
  }

  res.status(201).send()
});

// const transferForm = {
//   userId: Number(1),
//   accountFrom: 0,
//   accountTo: {id: 1, name: "First account", amount: 0, userId: 1},
//   type: String("income"),
//   category: String(""),
//   amount: Number(10.00),
//   exchange: Number(1.00)
// }

app.post("/transfer-income", async (req, res) => {
  const transferForm = req.body

  revenuesOnAccount(transferForm)

  const date = new Date()
  createRecordOfTransfer(date, transferForm)

  const userAccounts = getUserAccounts(transferForm.userId)
  const userHistory = getUserHistory(transferForm.userId)
  const response = {
    accounts: userAccounts,
    history: userHistory
  }
  
  res.status(201).res(JSON.stringify(response))
});

app.post("/transfer-expense", async (req, res) => {
  const transferForm = req.body

  expenditureFromAccount(transferForm)

  const date = new Date()
  createRecordOfTransfer(date, transferForm)

  const userAccounts = getUserAccounts(transferForm.userId)
  const userHistory = getUserHistory(transferForm.userId)
  const response = {
    accounts: userAccounts,
    history: userHistory
  }
  
  res.status(201).res(JSON.stringify(response))
});

app.post("/transfer-between", async (req, res) => {
  const transferForm = req.body

  betweenAccounts(transferForm)

  const date = new Date()
  createRecordOfTransfer(date, transferForm)

  const userAccounts = getUserAccounts(transferForm.userId)
  const userHistory = getUserHistory(transferForm.userId)

  const response = {
    accounts: userAccounts,
    history: userHistory
  }
  
  res.status(201).res(JSON.stringify(response))
});

app.listen(3333);