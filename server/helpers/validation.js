const validationEmail = require("./validationEmail")
const validationName = require("./validationName")
const validationPassword = require("./validationPassword")

const formKey = (key, value) => {
  switch (key) {
    case "name":
      return validationName(value);
    case "email":
      return validationEmail(value);
    case "password":
      return validationPassword(value);
    default:
      return console.error("key is none");
  }
};

const formAll = (form) => {
  if (!formKey('name', form.name)) return false
  if (!formKey('email', form.email)) return false
  if (!formKey('password', form.password)) return false
  return true
}

const validation = {
  formKey,
  formAll
}

module.exports = { validation }