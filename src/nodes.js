const form = document.querySelector("form");
const popup = document.querySelector("dialog");

// Inputs
const email = document.querySelector("#email");
const country = document.querySelector("#country");
const zip = document.querySelector("#zip");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

// Error fields
const emailErrorPara = document.querySelector("div.email p");
const countryErrorPara = document.querySelector("div.country p");
const zipErrorPara = document.querySelector("div.zip p");
const passwordErrorPara = document.querySelector("div.password p");
const confirmPasswordErrorPara = document.querySelector(
  "div.confirm-password p",
);

export {
  form,
  popup,
  email,
  country,
  zip,
  password,
  confirmPassword,
  emailErrorPara,
  countryErrorPara,
  zipErrorPara,
  passwordErrorPara,
  confirmPasswordErrorPara,
};
