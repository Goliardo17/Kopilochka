const express = require('express')
const router = express.Router()
const { currencyControllers } = require('../controllers/currency.controllers.js')

router.get("/currencies", async (req, res) => {
  const currenciesJSON = await currencyControllers.getCurrencies();

  res.status(201).send(currenciesJSON);
});

module.exports = router