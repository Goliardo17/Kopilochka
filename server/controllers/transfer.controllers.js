const { currencyControllers } = require("../controllers/currency.controllers");
const { historyControllers } = require("../controllers/history.controllers");
const { transferService } = require("../services/transfer.service");
const { accountService } = require("../services/account.service");

const transferToAccount = async (form) => {
  await transferService.revenuesToAccount(form.amount, form.accountIdTo);

  const userAccounts = await accountService.getUserAccounts(form.userId);
  await historyControllers.recordTransfer(form);

  return userAccounts;
};

const transferFromAccount = async (form) => {
  const accountFrom = await accountService.getAccount(form.accountIdFrom);
  const checkAmount = accountFrom.amount >= form.amount;

  if (accountFrom?.id && checkAmount) {
    await transferService.debitingFromAccount(form.amount, form.accountIdFrom);
    await historyControllers.recordTransfer(form);
  }

  const userAccounts = await accountService.getUserAccounts(form.userId);

  return userAccounts;
};

const transferBetweenAccounts = async (form) => {
  const accountFrom = await accountService.getAccount(form.accountIdFrom);
  const accountTo = await accountService.getAccount(form.accountIdTo);
  const checkAmount = accountFrom.amount >= form.amount;

  if (accountFrom.currency === accountTo.currency && checkAmount) {
    await transferService.debitingFromAccount(form.amount, form.accountIdFrom);
    await transferService.revenuesToAccount(form.amount, form.accountIdTo);
    await historyControllers.recordTransfer(form);
  } else if (accountFrom.currency !== accountTo.currency) {
    const exchange = await currencyControllers.getExchange(
      accountFrom.currency,
      accountTo.currency
    );
    const amountTo = Number(form.amount * exchange).toFixed(0);

    await transferService.debitingFromAccount(form.amount, form.accountIdFrom);
    await transferService.revenuesToAccount(amountTo, form.accountIdTo);
    await historyControllers.recordTransfer(form, exchange);
  }

  const userAccounts = await accountService.getUserAccounts(form.userId);

  return userAccounts;
};

const transferControllers = {
  transferToAccount,
  transferFromAccount,
  transferBetweenAccounts,
};

module.exports = { transferControllers };
