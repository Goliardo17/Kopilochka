const { userService } = require("../services/user.service");
const bcrypt = require('bcryptjs')
const { generateAccessToken } = require('../helpers/generateAccessToken')

const createUser = async (userInfo) => {
  const user = await userService.getUser(userInfo.email);

  if (user?.email) return false

  const { name, email, password } = userInfo
  const hashPassword = bcrypt.hashSync(password, 7)

  userService.createNewUser(name, email, hashPassword);
  
  return true;
};

const logInUser = async (userInfo) => {
  const userInDatabase = await userService.getUser(userInfo);

  if (!userInDatabase) {
    return false
  }

  const passwordInDB = userInDatabase.password
  const passwordFromClient = userInfo.password
  const validPassword = bcrypt.compareSync(passwordFromClient, passwordInDB)

  if (!validPassword) {
    return false;
  }

  const token = generateAccessToken(userInDatabase.id)
  return token
};

const userControllers = {
  createUser,
  logInUser,
};

module.exports = { userControllers };