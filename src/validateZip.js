import { showZipError } from "./errors";
import { addInvalidClass, removeInvalidClass } from "./classController";
import { country } from "./validateCountry";

const zip = document.querySelector("#zip");

const constraints = {
  switzerland: {
    regex: /^\d{4}$/,
    errorMsg: "Switzerland ZIPs must have exactly 4 digits: e.g. 1950",
  },
  france: {
    regex: /^\d{5}$/,
    errorMsg: "France ZIPs must have exactly 5 digits: e.g. 75012",
  },
  germany: {
    regex: /^\d{5}$/,
    errorMsg: "Germany ZIPs must have exactly 5 digits: e.g. 12345",
  },
  netherland: {
    regex: /^\d{4}\s?[A-Z]{2}$/,
    errorMsg:
      "Netherland ZIPs must have exactly 4 digits, followed by 2 uppercase letters: e.g. '1234 AB' or '1234AB'",
  },
};

let failRegexMsg;

const passRegex = () => {
  const selectCountry = country.value;
  const { regex, errorMsg } = constraints[selectCountry];
  const isValid = regex.test(zip.value);
  if (!isValid) failRegexMsg = errorMsg;
  return isValid;
};

const validateZip = () => {
  addInvalidClass(zip);
  if (!country.value) {
    showZipError("Please select a country first");
  } else if (zip.validity.valueMissing) {
    showZipError("Please enter a zip code");
  } else if (!passRegex()) {
    showZipError(failRegexMsg);
  } else {
    removeInvalidClass(zip);
    showZipError("");
  }
};
// FIX: form should not submit until passRegex is satisfied. Right now,
// form submits as long as country is selected and at least one value is
// entered

zip.addEventListener("input", validateZip);

export { validateZip };
