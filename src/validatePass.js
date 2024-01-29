import { showPasswordError } from "./showErrors";
import { password } from "./nodes";

const regex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$";

const passwordRequirements =
  "at least one uppercase letter, one lowercase letter, one number, and is at least 8 characters long";

password.pattern = regex;

const validatePassword = () => {
  if (password.validity.valueMissing) {
    showPasswordError(`Please enter a password`);
  } else if (password.validity.patternMismatch) {
    showPasswordError(`Password must have ${passwordRequirements}`);
  } else {
    showPasswordError("");
  }
};

password.addEventListener("input", validatePassword);

export { password, validatePassword };
