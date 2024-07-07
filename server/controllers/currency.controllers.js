const { currencyService } = require("../services/currency.service");

const getCurrencies = () => currencyService.getCurrencies();

const currencyControllers = {
  getCurrencies,
};

module.exports = {currencyControllers}
