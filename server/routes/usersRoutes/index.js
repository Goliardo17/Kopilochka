const express = require("express");
const router = express.Router();
const { controllers } = require("../../controllers");

router.post("/", controllers.users.logIn);
router.post("/create", controllers.users.create);

module.exports = router;
