const { userService } = require("../services/user.service");

const createUser = async (userInfo) => {
  const checkUserEmail = await userService.getUserEmail(userInfo.email);

  if (checkUserEmail) return false

  userService.createNewUser(userInfo);

  return true;
};

const logInUser = (userInfo) => {
  const userInDatabase = userService.getUser(userInfo);

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

// добавить валидацию
