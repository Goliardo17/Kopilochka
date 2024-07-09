const { userService } = require("../services/user.service");

const createUser = async (userInfo) => {
  const user = await userService.getUser(userInfo.email);

  if (user?.email) return false

  userService.createNewUser(userInfo);
  
  return true;
};

const logInUser = async (userInfo) => {
  const userInDatabase = await userService.getUser(userInfo);

  if (!userInDatabase) {
    return false
  }

  if (userInfo.password === userInDatabase.password) {
    return userInDatabase.id;
  }

  return false;
};

const userControllers = {
  createUser,
  logInUser,
};

module.exports = { userControllers };