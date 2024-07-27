const { services } = require("../../services");

const get = async (req, res) => {
  try {
    const userId = req.user.id;

    const userAccounts = await services.accounts.getByUserId(userId);

    const openAccounts = userAccounts.filter((item) => item.status === "open");

    res.status(200).json(openAccounts);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const create = async (req, res) => {
  try {
    const userId = req.user.id;
    const newAccount = req.body;

    await services.accounts.create(newAccount, userId);

    const newUserAccounts = await services.accounts.getByUserId(userId);

    const openAccounts = newUserAccounts.filter((item) => item.status === "open");

    res.status(201).json(openAccounts);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const close = async (req, res) => {
  try {
    const userId = req.user.id;
    const accountId = req.body.accountId;

    const userAccount = await services.accounts.getById(accountId);

    if (userAccount.user_id !== Number(userId))
      throw new Error("Пожалуйста перезайдите в ваш прфиль");

    if (userAccount.amount !== 0) {
      throw new Error("Остаток средств на счете не 0");
    }

    await services.accounts.close(accountId);

    const getUserAccounts = await services.accounts.getByUserId(userId);
    const newUserAccounts = getUserAccounts.filter(
      (item) => item.status === "open"
    );

    res.status(201).json(newUserAccounts);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const accountsControllers = {
  get,
  create,
  close,
};

module.exports = accountsControllers;
