import { form } from "./nodes";

const clearText = (node) => {
  const selectNode = node;
  selectNode.textContent = "";
};

const clearForm = () => {
  form.reset();
};

export { clearText, clearForm };
