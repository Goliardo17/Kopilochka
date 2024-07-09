const { accountService } = require("../services/account.service");

const getUserAccounts = async (userId) => await accountService.getUserAccounts(userId)

const createAccount = async (accauntInfo) => await accountService.createAccount(accauntInfo);

const accountControllers = {
	getUserAccounts,
  createAccount,
};

module.exports = {accountControllers}