const { services } = require("../services")

const exchange = async (from, to) => {
  const json = await services.currencies.getCurrencies();
  const currencies = JSON.parse(json);

  const currencyFrom = currencies.filter(
    (currency) => currency.exchange.source === from
  )[0];

  return currencyFrom.exchange.quotes[`${from + to}`];
};

module.exports = exchange;
