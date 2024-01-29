const popup = document.querySelector("dialog");

const togglePopup = () => {
  popup.classList.toggle("hidden");
};

const againBtn = popup.querySelector("button");

againBtn.addEventListener("click", togglePopup);

export { togglePopup };
