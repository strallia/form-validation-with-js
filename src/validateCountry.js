import { showCountryError } from "./errors";

const country = document.querySelector("#country");

const validateCountry = () => {
  if (country.validity.valueMissing) {
    showCountryError("Please select a country");
  } else {
    showCountryError("");
  }
};

country.addEventListener("input", validateCountry);

export { validateCountry };
