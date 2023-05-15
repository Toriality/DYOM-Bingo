import { requirements as requirementsData } from "../data/requirements.js";

//Requirements list
let requirementsList = [];

//On option click, change color and add/remove requirement name from the list
const optionClicked = (e) => {
  let div = e.target;
  let selected = (e.target.selected = !e.target.selected);
  div.classList.toggle("click");

  if (selected) requirementsList.push(div.obj.name);
  else
    requirementsList = requirementsList.filter((name) => name !== div.obj.name);
};

export const requirements = {
  createIn(div) {
    //Create option buttons from a requirement list
    requirementsData.forEach((req) => {
      const reqDiv = document.createElement("div");
      reqDiv.className = "formDiv";
      reqDiv.innerText = req.description;
      reqDiv.obj = req;
      reqDiv.addEventListener("click", optionClicked);
      reqDiv.addEventListener("mouseenter", () => {
        if (!reqDiv.selected) reqDiv.classList.add("mouseenter");
      });
      reqDiv.addEventListener("mouseleave", () => {
        reqDiv.classList.remove("mouseenter");
      });
      reqDiv.selected = false;
      div.appendChild(reqDiv);
    });
  },

  get() {
    const activeRequirements = document.querySelectorAll(".formDiv.click");
    const requirements = [];
    activeRequirements.forEach((req) => {
      requirements.push(req.obj.name);
    });
    return requirements;
  },
};
