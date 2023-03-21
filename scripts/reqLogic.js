import { requirements } from "./slotsData.js";

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

  //If a function was supplied from index.js, call it to signal options change
  if (req.onChange != null) req.onChange();
};

export const req = {
  //Create option buttons
  createIn: (div) => {
    //Create option buttons from a requirement list
    requirements.forEach((req) => {
      let div = document.createElement("div");
      div.className = "formdiv";
      div.innerText = req.description;
      div.obj = req;
      div.addEventListener("click", optionClicked);
      div.addEventListener("mouseenter", () => {
        if (!div.selected) div.classList.add("mouseenter");
      });
      div.addEventListener("mouseleave", () => {
        div.classList.remove("mouseenter");
      });
      div.selected = false;
      document.getElementById("options").appendChild(div);
    });
  },

  //Return all currently set options
  getAll: () => {
    return requirementsList;
  },
};
