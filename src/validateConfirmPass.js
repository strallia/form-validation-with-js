import { showConfirmPasswordError } from "./showErrors";
import { confirmPassword, password } from "./nodes";

const passMismatch = () => {
  confirmPassword.pattern = password.value;
  return confirmPassword.validity.patternMismatch;
};

const validateConfirmPassword = () => {
  if (confirmPassword.validity.valueMissing) {
    showConfirmPasswordError("Please re-enter your password");
  } else if (passMismatch()) {
    showConfirmPasswordError("Passwords must match");
  } else {
    showConfirmPasswordError("");
  }
};

confirmPassword.addEventListener("input", validateConfirmPassword);

export { validateConfirmPassword };
