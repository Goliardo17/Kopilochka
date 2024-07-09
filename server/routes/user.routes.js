const express = require('express')
const router = express.Router()
const { userControllers } = require('../controllers/user.controllers.js')
const { validation } = require('../helpers/validation.js')

router.post("/user", async (req, res) => {
  const userForm = req.body;

  const valid = validation.formKey("email", userForm.email) && validation.formKey("password", userForm.password)

  if (!valid) {
    res.status(500).send(JSON.stringify());
    return
  }

  const userId = await userControllers.logInUser(userForm);

  if (userId) {
    res.status(201).send(JSON.stringify({ id: userId }));
  } else {
    res.status(400).send(JSON.stringify());
  }
});

router.post("/user/create", async (req, res) => {
  const newUser = req.body;

  const valid = validation.formAll(newUser)

  if (!valid) {
    res.status(500).send(JSON.stringify());
    return
  }

  const response = await userControllers.createUser(newUser);

  if (response) {
    res.status(201).send(JSON.stringify(response));
  } else {
    res.status(400).send(JSON.stringify());
  }
});

module.exports = router