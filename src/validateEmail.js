import { showEmailError } from "./showErrors";
import { email } from "./nodes";

const validateEmail = () => {
  if (email.validity.valueMissing) {
    showEmailError("Please enter an email");
  } else if (email.validity.typeMismatch) {
    showEmailError("Use the pattern: john@appleseed");
  } else {
    showEmailError("");
  }
};

email.addEventListener("input", validateEmail);

export { validateEmail };
