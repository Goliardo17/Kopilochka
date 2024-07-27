const { services } = require("../../services");
const exchange = require("../../helpers/getExchange");

const getExchange = async (req, res) => {
  try {
    const {from, to} = req.body

    const exchange = await exchange(from, to);

    if (!exchange) throw new Error("No exchange");

    res.status(201).json(exchange);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const get = async (req, res) => {
  try {
    const currencies = await services.currencies.getCurrencies();

    res.status(201).send(currencies);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const currenciesControllers = {
  get,
  getExchange,
};

module.exports = currenciesControllers;
