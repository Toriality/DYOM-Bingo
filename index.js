//Functions for generating slots
import {slotsLogic} from "./slotsLogic.js";

//Functions for creating and querying requirements
import {req} from "./reqLogic.js"

//Functions for storing/retreiving score
import { score } from "./score.js";

//Functions for creating and querying tiles
import { tiles } from "./tiles.js"

//Relevant visual elements
let button = document.getElementById("btn");
let dyomDiv = document.getElementById("dyom");
let optionsDiv = document.getElementById("options");
let scoreString = document.getElementById("scoreBox");

//Player can win once per tile generation, if player already won, don't increment score any more
let alreadyWon = false;

//Let score module create it's text inside scoreBox
score.createIn(scoreBox);

//When tiles module detects winning condition it calls this function
const onWin = () => {
    if(!alreadyWon){
        score.updateWon();
        alreadyWon = true;
    }
}

//Connect onWin declared above with tiles module 
tiles.onWin = onWin;
//Let tiles module create all tiles 
tiles.createIn(dyomDiv);




//When generating new slot without previous win
//(when giving up)
const onLose = () => {
    score.updateLost();
}

//Called whenever option is checked or unchecked
const onReqChange = () =>{
    regenerateSlots();
}
//Connect onReqChange declared above with requirements module
req.onChange = onReqChange;
//Let requirements module create all option buttons
req.createIn(optionsDiv);

//Used for storing currently displayed slots
let slotsList = [];

//Called on page refresh and on clicking "Generate new slot" button
let regenerateSlots = () => {
  //Generate new slots ommiting existing ones and those with set requirements
  let newSlots = slotsLogic.generate(req.getAll(), slotsList);
  //Save slotsList for next generation event
  slotsList = newSlots;
  //Let tiles module do the update
  tiles.regenerate(newSlots);

};

//If no bingo, and regenerating slots signal lose condition
let buttonHandler = () => {
  if(!alreadyWon)
    onLose();
  alreadyWon = false;
  regenerateSlots();
};

document.getElementById("slotCount").innerText = slotsLogic.getCount();

button.addEventListener("click", buttonHandler);
regenerateSlots();



