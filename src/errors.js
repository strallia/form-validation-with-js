import { clearText } from "./reset";

const emailErrorPara = document.querySelector("div.email p");

const showEmailError = (string) => {
  clearText(emailErrorPara);
  emailErrorPara.textContent = string;
};

const countryErrorPara = document.querySelector("div.country p");

const showCountryError = (string) => {
  clearText(countryErrorPara);
  countryErrorPara.textContent = string;
};

const zipErrorPara = document.querySelector("div.zip p");

const showZipError = (string) => {
  clearText(zipErrorPara);
  zipErrorPara.textContent = string;
};

const passwordErrorPara = document.querySelector("div.password p");

const showPasswordError = (string) => {
  clearText(passwordErrorPara);
  passwordErrorPara.textContent = string;
};

const confirmPasswordErrorPara = document.querySelector(
  "div.confirm-assword p",
);

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
