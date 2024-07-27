const base = require("./base");
const accounts = require("./accounts");
const currecies = require("./currencies");
const history = require("./history");
const transfer = require("./transfer");
const users = require("./users");

const controllers = {
  base,
  accounts,
  currecies,
  history,
  transfer,
  users,
};

module.exports = { controllers };
