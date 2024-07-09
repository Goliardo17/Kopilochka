const { currencyService } = require("../services/currency.service");

const getExchange = async (from, to) => {
  const json = await currencyService.getCurrencies()
  const currencies = JSON.parse(json);

  const currencyFrom = currencies.filter(
    (currency) => currency.exchange.source === from
  )[0];

  const exchange = currencyFrom.exchange.quotes[`${from + to}`];

  return exchange;
};

const getCurrencies = () => currencyService.getCurrencies();

const currencyControllers = {
  getCurrencies,
  getExchange,
};

module.exports = { currencyControllers };
