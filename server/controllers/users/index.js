const { services } = require("../../services");
const { validation } = require("../../helpers/validation");

const bcrypt = require("bcryptjs");
const { generateAccessToken } = require("../../helpers/generateAccessToken");

const create = async (req, res) => {
  try {
    const newUser = req.body;

    const valid = validation.formAll(newUser);

    if (!valid) {
      throw new Error("Данные пользователя введены не корректно");
    }

    const user = await services.users.get(newUser.email);

    if (user?.email)
      throw new Error("Такой пользователь уже существует");

    const { name, email, password } = newUser;

    const hashPassword = bcrypt.hashSync(password, 7);

    services.users.create(name, email, hashPassword);

    res.status(201).json("Пользователь успешно создан");
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const logIn = async (req, res) => {
  try {
    const userForm = req.body;

    const valid =
      validation.formKey("email", userForm.email) &&
      validation.formKey("password", userForm.password);

    if (!valid) {
      throw new Error("Данные пользователя введены не корректно");
    }

    const userInDatabase = await services.users.get(userForm.email);

    if (!userInDatabase) {
      throw new Error("Такой пользователь не зарегистрирован");
    }

    const passwordInDB = userInDatabase.password;
    const passwordFromClient = userForm.password;
    const validPassword = bcrypt.compareSync(passwordFromClient, passwordInDB);

    if (!validPassword) {
      throw new Error("Данные пользователя введены не верно");
    }

    const token = generateAccessToken(userInDatabase.id);

    res.status(201).json(token);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const usersControllers = {
  create,
  logIn,
};

module.exports = usersControllers;
