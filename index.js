// Import slots strings
import { slots } from "./slots.js";

// Create table element
let table = document.createElement("table");

// List of inserted strings
let addedStrings = [];

// Options
let limitNeedsTimer = false;
let limitNeedsTTS = false;
let limitNeedsTranslator = false;
let limitNeedsInfo = false;
let button = document.getElementById("btn");
button.addEventListener("click", () => {
  addedStrings = [];
  limitNeedsInfo = document.getElementById("needsInfo").checked;
  limitNeedsTTS = document.getElementById("needsTTS").checked;
  limitNeedsTimer = document.getElementById("needsTimer").checked;
  limitNeedsTranslator = document.getElementById("needsTranslator").checked;
  let existingSlots = document.querySelectorAll("td");
  existingSlots.forEach((thisSlot) => {
  	thisSlot.className = "";
    let randomSlot;
    let validSlot;
    do {
      validSlot = true;
      randomSlot = slots[Math.floor(Math.random() * slots.length)];
      if (randomSlot.needsInfo && limitNeedsInfo) validSlot = false;
      if (randomSlot.needsTimer && limitNeedsTimer) validSlot = false;
      if (randomSlot.needsTranslator && limitNeedsTranslator) validSlot = false;
      if (randomSlot.needsTTS && limitNeedsTTS) validSlot = false;
      thisSlot.innerText = randomSlot.string;
    } while (
      addedStrings.includes(thisSlot.textContent) ||
      validSlot === false
    );
    addedStrings.push(randomSlot.string);
    if (randomSlot.helperText) {
      let helperText = document.createElement("span");
      helperText.innerText = randomSlot.helperText;
      thisSlot.appendChild(helperText);
    }
  });
});

// Create a 5x5 bingo table
for (let i = 0; i < 5; i++) {
  let row = document.createElement("tr");
  for (let j = 0; j < 5; j++) {
    let randomSlot;
    let cell = document.createElement("td");
    do {
      randomSlot = slots[Math.floor(Math.random() * slots.length)];
      cell.textContent = randomSlot.string;
    } while (addedStrings.includes(cell.textContent));
    addedStrings.push(randomSlot.string);
    if (randomSlot.helperText) {
      let helperText = document.createElement("span");
      helperText.innerText = randomSlot.helperText;
      cell.appendChild(helperText);
    }
    row.appendChild(cell);
  }
  table.appendChild(row);
}
// Get main div and append created table
let dyom = document.getElementById("dyom");
dyom.appendChild(table);
console.log(addedStrings);

// Add/remove "selected" class from cells on click event
let cells = document.querySelectorAll("td");
cells.forEach(function (cell) {
  cell.addEventListener("click", function () {
    if (cell.classList.contains("selected")) cell.classList.remove("selected");
    else cell.classList.add("selected");
  });
});

// :has alternative for Firefox
let formLabels = document.querySelectorAll(".formdiv label");
let checkboxes = document.querySelectorAll("input");
checkboxes.forEach((input) => {
  input.addEventListener("change", () => {
    let parent = input.parentElement;
    if (input.checked) {
      parent.style.backgroundColor = "rgba(255, 204, 204, 0.75)";
      parent.style.borderColor = "rgba(255, 49, 49, 0.75)";
    } else {
      parent.style.backgroundColor = "#eee";
      parent.style.borderColor = "#ccc";
    }
    parent.addEventListener("mouseenter", () => {
      if (!input.checked) {
        parent.style.backgroundColor = "#ffffcf";
        parent.style.borderColor = "#ffdf70";
      }
    });
    parent.addEventListener("mouseleave", () => {
      if (!input.checked) {
        parent.style.backgroundColor = "#eee";
        parent.style.borderColor = "#ccc";
      }
    });
  });
});
