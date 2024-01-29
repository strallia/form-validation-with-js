import { popup } from "./nodes";
import { clearForm } from "./reset";

const togglePopup = () => {
  popup.classList.toggle("hidden");
};

const againBtn = popup.querySelector("button");

againBtn.addEventListener("click", () => {
  clearForm();
  togglePopup();
});

export { togglePopup };
