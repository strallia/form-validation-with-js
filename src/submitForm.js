import { togglePopup } from "./popup";
import { validateCountry } from "./validateCountry";
import { validateEmail } from "./validateEmail";

const form = document.querySelector("form");

const submit = form.querySelector("button[type=submit]");

const submitForm = (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    validateEmail();
    validateCountry();
  } else {
    togglePopup();
  }
};

submit.addEventListener("click", submitForm);
