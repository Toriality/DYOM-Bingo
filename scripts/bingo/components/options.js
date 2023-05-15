import { requirements } from "./requirements.js";

export const options = {
  createIn(div) {
    const requirementsDiv = document.createElement("div");
    requirementsDiv.id = "requirements";
    requirements.createIn(requirementsDiv);
    div.appendChild(requirementsDiv);
  },

  // This file exists because in the future more options will be added to the panel
  // (ex: difficulty)
};
