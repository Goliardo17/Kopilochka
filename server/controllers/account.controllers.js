const { accountService } = require("../services/account.service");
const { filterAccountByStatus } = require('../common/accounts/filterClosedAccount')

const getUserAccounts = async (userId) => {
  const userAccounts = await accountService.getUserAccounts(userId)
  return filterAccountByStatus('open', userAccounts)
}

const createAccount = async (accauntInfo) => await accountService.createAccount(accauntInfo);

const closedAccount = async ({ userId, accountId}) => {

  const userAccount = await accountService.getAccount(accountId)
  
  if (userAccount.user_id === Number(userId) && userAccount.amount === 0) {
    await accountService.closedAccount(accountId)
  }

  const newUserAccount = await accountService.getUserAccounts(userId)

  return filterAccountByStatus('open', newUserAccount)
}

const accountControllers = {
	getUserAccounts,
  createAccount,
  closedAccount
};

module.exports = {accountControllers}