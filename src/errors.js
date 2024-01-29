import { clearText } from "./reset";

const emailErrorPara = document.querySelector("div.email p");

export const showEmailError = (string) => {
  clearText(emailErrorPara);
  emailErrorPara.textContent = string;
};

const countryErrorPara = document.querySelector("div.country p");

export const showCountryError = (string) => {
  clearText(countryErrorPara);
  countryErrorPara.textContent = string;
};

const zipErrorPara = document.querySelector("div.zip p");

export const showZipError = (string) => {
  clearText(zipErrorPara);
  zipErrorPara.textContent = string;
};

const passwordErrorPara = document.querySelector("div.password p");

export const showPasswordError = (string) => {
  clearText(passwordErrorPara);
  passwordErrorPara.textContent = string;
};

export const confirmPasswordErrorPara = document.querySelector(
  "div.confirm-assword p",
);

export const showConfirmPasswordError = (string) => {
  clearText(confirmPasswordErrorPara);
  confirmPasswordErrorPara.textContent = string;
};
