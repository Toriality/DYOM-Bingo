// Import slots strings
import { slots } from "./slots.js";

// Create table element
let table = document.createElement("table");

// List of inserted strings
let addedStrings = [];

// Create a 5x5 bingo table
for (let i = 0; i < 5; i++) {
  let row = document.createElement("tr");
  for (let j = 0; j < 5; j++) {
    let randomSlot;
    let cell = document.createElement("td");
    do {
      randomSlot = slots[Math.floor(Math.random() * slots.length)];
      cell.textContent = randomSlot;
    } while (addedStrings.includes(cell.textContent));
    addedStrings.push(randomSlot);
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
