const { services } = require("../../services");
const getExchange = require("../../helpers/getExchange");

const toAccount = async (req, res) => {
  try {
    const userId = req.user.id;
    const form = req.body;

    await services.transfer.revenuesToAccount(form.amount, form.accountIdTo);

    const date = Date.now();

    await services.history.record(date, form, userId);

    const userAccounts = await services.accounts.getByUserId(userId);

    const newUserAccounts = userAccounts.filter(
      (item) => item.status === "open"
    );

    res.status(201).json(newUserAccounts);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const fromAccount = async (req, res) => {
  try {
    const userId = req.user.id;
    const form = req.body;

    const accountFrom = await services.accounts.getById(form.accountIdFrom);

    if (accountFrom.user_id !== userId) {
      throw new Error("Пожалуйста перезайдите в свой аккаунт");
    }

    const checkAmount = accountFrom.amount >= form.amount;

    if (accountFrom?.id && checkAmount) {
      await services.transfer.debitingFromAccount(
        form.amount,
        form.accountIdFrom
      );
      const date = Date.now();

      await services.history.record(date, form, userId);
    }

    const userAccounts = await services.accounts.getByUserId(userId);

    const newUserAccounts = userAccounts.filter(
      (item) => item.status === "open"
    );

    res.status(200).json(newUserAccounts);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const betweenAccounts = async (req, res) => {
  try {
    const userId = req.user.id;
    const form = req.body;

    const accountFrom = await services.accounts.getById(form.accountIdFrom);
    const accountTo = await services.accounts.getById(form.accountIdTo);

    const checkAmount = accountFrom.amount >= form.amount;

    if (!checkAmount) throw new Error("Недостаточно средств на счете списания");

    if (accountFrom.currency === accountTo.currency) {
      await services.transfer.debitingFromAccount(
        form.amount,
        form.accountIdFrom
      );

      await services.transfer.revenuesToAccount(form.amount, form.accountIdTo);

      const date = Date.now();

      await services.history.record(date, form, userId);
    } else {
      const exchange = await getExchange(
        accountFrom.currency,
        accountTo.currency
      );

      const amountTo = Number(form.amount * exchange).toFixed(0);

      await services.transfer.debitingFromAccount(
        form.amount,
        form.accountIdFrom
      );

      await services.transfer.revenuesToAccount(amountTo, form.accountIdTo);

      const date = Date.now();

      await services.history.record(date, form, userId, exchange);
    }

    const userAccounts = await services.accounts.getByUserId(userId);

    const newUserAccounts = userAccounts.filter(
      (item) => item.status === "open"
    );

    res.status(200).json(newUserAccounts);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const transferControllers = {
  toAccount,
  fromAccount,
  betweenAccounts,
};

module.exports = transferControllers;
