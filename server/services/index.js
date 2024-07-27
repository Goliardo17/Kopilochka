const accounts = require("./accounts");
const base = require("./base");
const currencies = require("./currencies");
const history = require("./history");
const transfer = require("./transfer");
const users = require("./users");

const services = {
  accounts,
  base,
  currencies,
  history,
  transfer,
  users,
};

module.exports = { services };
