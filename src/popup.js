import { form, popup } from "./nodes";

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
