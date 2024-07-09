const express = require("express");
const cors = require("cors");
const app = express();

const baseControllers = require('./controllers/base.controllers.js')
const userRoutes = require('./routes/user.routes.js')
const accountRoutes = require('./routes/accout.routes.js')
const transferRoutes = require('./routes/transfer.routes.js')
const currencyRoutes = require('./routes/currency.routes.js')
const historyRoutes = require('./routes/history.routes.js')

app.use(cors());
app.use(express.json());
app.use(async (req, res, next) => {
  await baseControllers.createBase()
  next()
})
app.use(userRoutes)
app.use(accountRoutes)
app.use(transferRoutes)
app.use(currencyRoutes)
app.use(historyRoutes)

app.listen(3333);