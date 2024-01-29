import { form } from "./submitForm";

const popup = document.querySelector("dialog");

const togglePopup = () => {
  popup.classList.toggle("hidden");
};

const againBtn = popup.querySelector("button");

const clearForm = () => {
  form.reset();
};

againBtn.addEventListener("click", () => {
  clearForm();
  togglePopup();
});

export { togglePopup };
