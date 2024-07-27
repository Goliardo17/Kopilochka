const express = require("express");
const router = express.Router();
const { controllers } = require("../../controllers");

router.put("/income", controllers.transfer.toAccount);
router.put("/expense", controllers.transfer.fromAccount);
router.put("/between", controllers.transfer.betweenAccounts);

module.exports = router;
