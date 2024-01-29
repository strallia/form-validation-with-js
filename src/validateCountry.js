import { showCountryError } from "./showErrors";
import { validateZip } from "./validateZip";
import { country } from "./nodes";

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
