import { showCountryError } from "./errors";
import { validateZip } from "./validateZip";

const country = document.querySelector("#country");

const validateCountry = () => {
  if (country.validity.valueMissing) {
    showCountryError("Please select a country");
  } else {
    showCountryError("");
  }
};

country.addEventListener("input", () => {
  validateCountry();
  validateZip();
});

export { country, validateCountry };
