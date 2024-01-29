import { showEmailError } from "./errors";

const email = document.querySelector("[type=email]");

export const validateEmail = () => {
  if (email.validity.valueMissing) {
    showEmailError("Please enter an email");
  } else if (email.validity.typeMismatch) {
    showEmailError("Use the pattern: john@appleseed.com");
  }
};
