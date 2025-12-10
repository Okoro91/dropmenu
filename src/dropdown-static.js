import Dropdown from "./dropdown.js";

const instances = new Map();

export const createDropdowns = (selector = "[data-dropdown]", options = {}) => {
  document.querySelectorAll(selector).forEach((element) => {
    if (!instances.has(element)) {
      instances.set(element, new Dropdown(element, options));
    }
  });
};

export const closeAllDropdowns = (exclude = null) => {
  instances.forEach((instance, element) => {
    if (instance !== exclude && instance.isOpen) {
      instance.close();
    }
  });
};

export const destroyAllDropdowns = () => {
  instances.forEach((instance) => {
    instance.destroy();
  });
  instances.clear();
};

document.addEventListener("DOMContentLoaded", () => {
  createDropdowns();
});

export default { createDropdowns, closeAllDropdowns, destroyAllDropdowns };
