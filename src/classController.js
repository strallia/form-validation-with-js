const removeInvalidClass = (node) => {
  node.classList.remove("invalid");
};

const addInvalidClass = (node) => {
  node.classList.add("invalid");
};

export { removeInvalidClass, addInvalidClass };
