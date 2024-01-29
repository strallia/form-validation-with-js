import { togglePopup } from "./popup";
import { validateEmail } from "./validateEmail";

const form = document.querySelector("form");

const submit = form.querySelector("button[type=submit]");

const submitForm = (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    validateEmail();
  } else {
    togglePopup();
  }
};

submit.addEventListener("click", submitForm);
