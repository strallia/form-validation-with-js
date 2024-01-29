import { clearText } from "./reset";
import {
  emailErrorPara,
  countryErrorPara,
  zipErrorPara,
  passwordErrorPara,
  confirmPasswordErrorPara,
} from "./nodes";

const showEmailError = (string) => {
  clearText(emailErrorPara);
  emailErrorPara.textContent = string;
};

const showCountryError = (string) => {
  clearText(countryErrorPara);
  countryErrorPara.textContent = string;
};

const showZipError = (string) => {
  clearText(zipErrorPara);
  zipErrorPara.textContent = string;
};

const showPasswordError = (string) => {
  clearText(passwordErrorPara);
  passwordErrorPara.textContent = string;
};

const showConfirmPasswordError = (string) => {
  clearText(confirmPasswordErrorPara);
  confirmPasswordErrorPara.textContent = string;
};

export {
  showEmailError,
  showCountryError,
  showZipError,
  showPasswordError,
  showConfirmPasswordError,
};
