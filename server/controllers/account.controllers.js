const { accountService } = require("../services/account.service");

const getUserAccounts = (userId) => accountService.getUserAccounts(userId)

const createAccount = (accauntInfo) =>
  accountService.createAccount(accauntInfo);

const accountControllers = {
	getUserAccounts,
  createAccount,
};

module.exports = {accountControllers}