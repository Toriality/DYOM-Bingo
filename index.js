// Import slots strings
import { slots, requirements } from "./slots.js";

// Create table element
let table = document.createElement("table");


let button = document.getElementById("btn");
let dyom = document.getElementById("dyom");

//Requirements list
let requirementsList = [];



//On option click, change color and add/remove requirement name from the list
let optionClicked = (e) => {
    let div = e.target;
    let selected = e.target.selected = !e.target.selected;
    div.style.backgroundColor = selected?"rgba(255, 204, 204, 0.75)":"#eee";
    div.style.borderColor = selected?"rgba(255, 49, 49, 0.75)":"#ccc";
    

    if(selected)
        requirementsList.push(div.obj.name);
    else
        requirementsList = requirementsList.filter(name => name !== div.obj.name)
}

//Called on page refresh and on clicking "Generate new slot" b
let regenerateSlots = () => {
    let existingSlots = document.querySelectorAll("td");

    //Filter out slots which require selected options, so there is no need to check for that later
    let filteredSlots = slots;
    requirementsList.forEach(req => filteredSlots = filteredSlots.filter(slot => slot.requires==undefined || !slot.requires.includes(req)))


    //Filter out slots which are displayed right now, so slots don't repeat as often
    existingSlots.forEach(exSlot => filteredSlots = filteredSlots.filter(slot => slot.string!=exSlot.innerText));


    existingSlots.forEach((thisSlot) => {
        thisSlot.className = "";
        let randomSlot = filteredSlots[Math.floor(Math.random() * filteredSlots.length)];
        thisSlot.innerText = randomSlot.string;

        //Instead of retrying each time the same thing was chosen, just filter out chosen slot so it cannot be chosen again
        filteredSlots = filteredSlots.filter(slot => slot.string!=randomSlot.string)

        if (randomSlot.helperText) {
          let helperText = document.createElement("span");
          helperText.innerText = randomSlot.helperText;
          thisSlot.appendChild(helperText);
        }
    });
};


//Create option buttons from a requirement list
requirements.forEach((req) => {
    let div = document.createElement("div");
    div.className = "formdiv";
    div.innerText = req.description;
    div.obj = req;
    div.addEventListener("click", optionClicked); 
    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = div.selected?"rgba(255, 204, 204, 0.75)":"#ffffcf";
        div.style.borderColor = div.selected?"rgba(255, 49, 49, 0.75)":"#ffdf70";
    })

    div.addEventListener("mouseleave", () => {
        div.style.backgroundColor = div.selected?"rgba(255, 204, 204, 0.75)":"#eee";
        div.style.borderColor = div.selected?"rgba(255, 49, 49, 0.75)":"#ccc";
    })
    div.selected = false;
    document.getElementById("options").appendChild(div);
})


// Create a 5x5 bingo table and add it to dyom div
for (let i = 0; i < 5; i++) {
  let row = document.createElement("tr");
  for (let j = 0; j < 5; j++) {
    let cell = document.createElement("td");
    cell.addEventListener("click", () => cell.className = cell.className=="selected"?"":"selected");
    row.appendChild(cell);
  }
  table.appendChild(row);
}
dyom.appendChild(table);

button.addEventListener("click", regenerateSlots);
regenerateSlots();



