import { showZipError } from "./errors";
import { country, zip } from "./nodes";

const constraints = {
  switzerland: {
    regex: "^\\d{4}$",
    errorMsg: "Switzerland ZIPs must have exactly 4 digits: e.g. 1950",
  },
  france: {
    regex: "^\\d{5}$",
    errorMsg: "France ZIPs must have exactly 5 digits: e.g. 75012",
  },
  germany: {
    regex: "^\\d{5}$",
    errorMsg: "Germany ZIPs must have exactly 5 digits: e.g. 12345",
  },
  netherland: {
    regex: "^\\d{4}\\s?[A-Z]{2}$",
    errorMsg:
      "Netherland ZIPs must have exactly 4 digits, followed by 2 uppercase letters: e.g. '1234 AB' or '1234AB'",
  },
};

let failRegexMsg;

const failRegex = () => {
  const selectCountry = country.value;
  const { regex, errorMsg } = constraints[selectCountry];
  zip.pattern = regex;
  if (zip.validity.patternMismatch) failRegexMsg = errorMsg;
  return zip.validity.patternMismatch;
};

const validateZip = () => {
  if (!country.value) {
    showZipError("Please select a country first");
  } else if (zip.validity.valueMissing) {
    showZipError("Please enter a zip code");
  } else if (failRegex()) {
    showZipError(failRegexMsg);
  } else {
    showZipError("");
  }
};

zip.addEventListener("input", validateZip);

export { validateZip };
