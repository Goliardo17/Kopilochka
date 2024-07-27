const { services } = require("../../services");

const get = async (req, res) => {
  try {
    const userId = req.user.id;

    const userHistory = await services.history.get(userId);

    if (!userHistory) {
      throw new Error("No userHistory");
    }

    res.status(201).json(userHistory);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const record = async (form, userId, exchange) => {
  try {
    const date = Date.now();

    await services.history.record(date, form, userId, exchange);
  } catch (err) {
    console.error(err);
  }
};

const historyControllers = {
  get,
  record,
};

module.exports = historyControllers;
