const express = require("express");
const router = express.Router();
const { historyControllers } = require("../controllers/history.controllers.js");

router.post("/history", async (req, res) => {
  const { userId } = req.body;

  const userHistory = await historyControllers.getUserHistory(userId);

  if (userHistory) {
    res.status(201).send(JSON.stringify(userHistory));
  } else {
    res.status(400).send();
  }
});

module.exports = router;
