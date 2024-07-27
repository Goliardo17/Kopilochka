const { services } = require("../../services");

const create = async () => {
  try {
    await services.base.create();
  } catch (err) {
    console.error(err);
  }
};

const getCurrencies = () => {
  try {
    return services.currencies.getCurrencies();
  } catch (err) {
    console.error(err);
  }
};

const baseConrollers = {
  create,
  getCurrencies,
};

module.exports = baseConrollers;
