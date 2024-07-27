const express = require("express");
const router = express.Router();
const { controllers } = require("../../controllers");

router.get("/", controllers.accounts.get);
router.post("/create", controllers.accounts.create);
router.put("/close", controllers.accounts.close);

module.exports = router;
