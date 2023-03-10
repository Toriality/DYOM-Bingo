// Import slots strings
import { slots, requirements } from "./slots.js";

// Create table element
let table = document.createElement("table");


let button = document.getElementById("btn");
let dyom = document.getElementById("dyom");

//Score is stored locally, set to 0 if not set already
if(!localStorage.getItem("scoreWin"))
    localStorage.setItem("scoreWin", 0);

if(!localStorage.getItem("scoreLose"))
    localStorage.setItem("scoreLose", 0);


//Load score and display it
let scoreWin = localStorage.getItem("scoreWin");
let scoreLose = localStorage.getItem("scoreLose");
document.getElementById("scoreString").innerText = "Score: "+scoreWin+"-"+scoreLose;

//Player can win once per tile generation, if player already won, don't increment score any more 
let alreadyWon = false;



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
        thisSlot.selected = false;
        thisSlot.style.backgroundColor = "";
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

//Called every time a tile was clicked on
let tileClicked = (e) =>{
    //Set/reset selection
    let tile = e.target;
    tile.selected = !tile.selected;
    
 
    let allTiles = Array.from(document.getElementsByTagName("td"));
    let selectedTiles = allTiles.filter(tile => tile.selected);
    let winningTiles = [];
    //Clear tile colours
    allTiles.forEach(tile =>tile.style.backgroundColor = "");
    //Set colour on selected tiles
    selectedTiles.forEach(tile => tile.style.backgroundColor = "#ffdf70")

    //Search for winning tiles/bingo

    for(let i = 0; i<5; i++){
        let selectedInRow = allTiles.filter(tile=>tile.y==i).filter(tile=>tile.selected);
        let selectedInColumn = allTiles.filter(tile=>tile.x==i).filter(tile=>tile.selected);
        if(selectedInColumn.length==5)
            winningTiles = winningTiles.concat(selectedInColumn)
        if(selectedInRow.length==5)
            winningTiles = winningTiles.concat(selectedInRow)
    }
    let selectedDiagonally1 = allTiles.filter(tile=>tile.y==tile.x).filter(tile=>tile.selected)
    let selectedDiagonally2 = allTiles.filter(tile=>(4-tile.y)==tile.x).filter(tile=>tile.selected)
    if(selectedDiagonally1.length==5)
        winningTiles = winningTiles.concat(selectedDiagonally1)
    if(selectedDiagonally2.length==5)
        winningTiles = winningTiles.concat(selectedDiagonally2)   

    //On winning condition
    if(winningTiles.length>0 && !alreadyWon){
        scoreWin++;

        localStorage.setItem("scoreWin", scoreWin);
        alreadyWon=true;
        document.getElementById("scoreString").innerText = "Score: "+scoreWin+"-"+scoreLose;
    }
    //set different color for winning tiles
    winningTiles.forEach(tile => tile.style.backgroundColor = "#8dff70")


}

//If no bingo, and regenerating slots, increment scoreLose
let buttonHandler = () => {
    if(!alreadyWon){
        scoreLose++;

        localStorage.setItem("scoreLose", scoreLose);
        document.getElementById("scoreString").innerText = "Score: "+scoreWin+"-"+scoreLose;
    }

    alreadyWon=false;
    regenerateSlots();
}



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
    cell.y = i;
    cell.x = j;
    cell.addEventListener("click", tileClicked);
    row.appendChild(cell);
  }
  table.appendChild(row);
}
dyom.appendChild(table);

button.addEventListener("click", buttonHandler);
regenerateSlots();



