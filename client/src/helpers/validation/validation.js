import { validationEmail } from "./validationEmail";
import { validationName } from "./validationName";
import { validationPassword } from "./validationPassword";

export const validation = (type, value) => {
  switch (type) {
    case "name":
      return validationName(value);
    case "email":
      return validationEmail(value);
    case "password":
      return validationPassword(value);
    default:
      return console.error("type is none");
  }
};
