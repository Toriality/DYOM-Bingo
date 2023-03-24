import { requirements as requirementsData } from "../data/requirements.js";

//Requirements list
let requirementsList = [];

//On option click, change color and add/remove requirement name from the list
let optionClicked = (e) => {
  let div = e.target;
  let selected = (e.target.selected = !e.target.selected);
  div.classList.toggle("click");

  if (selected) requirementsList.push(div.obj.name);
  else
    requirementsList = requirementsList.filter((name) => name !== div.obj.name);
};

export const requirements = {
  createIn: (div) => {
    //Create option buttons from a requirement list
    requirementsData.forEach((req) => {
      let reqDiv = document.createElement("div");
      reqDiv.className = "formdiv";
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

  get: () => {
    let activeReqs = document.querySelectorAll(".formdiv.click");
    let reqs = [];
    activeReqs.forEach((req) => {
      reqs.push(req.obj.name);
    });
    return reqs;
  },
};
