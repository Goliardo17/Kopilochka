const fs = require("fs");

const getCurrencies =
  ("../currencies/currencies.json",
  async (err, data) => {
    if (err) {
      console.log(err);
    }

    const result = fs.readFileSync("currencies/currencies.json").toString();

    return result;
  });

const currenciesServices = {
  getCurrencies,
};

module.exports = currenciesServices