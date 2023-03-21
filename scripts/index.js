//Functions for generating slots
import { slotsLogic } from "./slotsLogic.js";

//Functions for creating and querying requirements
import { req } from "./reqLogic.js";

//Functions for storing/retreiving score
import { score } from "./score.js";

//Functions for creating and querying tiles
import { tiles } from "./tiles.js";

//Functions for creating and updating timer and PB
import { timer } from "./timer.js";

//Functions for storing cards
import { history } from "./history.js";

//Relevant visual elements
let generateBtn = document.getElementById("generate");
let resetBtn = document.getElementById("reset");
let dyomDiv = document.getElementById("card");
let optionsDiv = document.getElementById("options");
let scoreBox = document.getElementById("scoreBox");
let timerBox = document.getElementById("timerBox");
let historyBox = document.getElementById("historyBox");

//Let history module create it's text inside historyBox
history.createIn(historyBox);

//Let timer module create it's text inside timerBox
timer.createIn(timerBox);

//Player can win once per tile generation, if player already won, don't increment score any more
let alreadyWon = false;

//Let score module create it's text inside scoreBox
score.createIn(scoreBox);

//When tiles module detects winning condition it calls this function
const onWin = () => {
  if (!alreadyWon) {
    //Update score
    score.updateWon();
    //Stop timer and potentially update PB
    timer.win();
    alreadyWon = true;
  }
};

//Connect onWin declared above with tiles module
tiles.onWin = onWin;

//Let tiles module create all tiles
tiles.createIn(dyomDiv);

//When generating new slot without previous win
//(when giving up)
const onLose = () => {
  score.updateLost();
};

//Let requirements module create all option buttons
req.createIn(optionsDiv);

//Used for storing currently displayed slots
let slotsList = [];

//Called on page refresh and on clicking "Generate new slot" button
let regenerateSlots = () => {
  //Save card before regenerating
  if (!tiles.skippable) {
    history.save({
      date: new Date(),
      score: score.get(),
      time: timer.getTime(),
      pb: timer.getPB(),
      card: tiles.getAll(),
    });
  }

  //Generate new slots ommiting existing ones and those with set requirements
  let newSlots = slotsLogic.generate(req.getAll(), slotsList);
  //Save slotsList for next generation event
  slotsList = newSlots;
  //Let tiles module do the update
  tiles.regenerate(newSlots);
  //Restart timer each time new tiles are generated
  timer.restart();
};

//If no bingo, and regenerating slots signal lose condition
let buttonHandler = () => {
  if (alreadyWon || tiles.skippable) {
    alreadyWon = false;
    regenerateSlots();
  } else {
    let shouldRegenerate = confirm(
      "You lose a point when you regenerate a Bingo card without completing it. Are you sure you want to get a new card?"
    );
    if (shouldRegenerate) {
      onLose();
      regenerateSlots();
    }
  }
};

//Handle reset score button
let resetHandler = () => {
  let shouldReset = confirm("Are you sure you want to reset your score?");
  if (shouldReset) {
    score.reset();
    timer.resetPB();
    regenerateSlots();
  }
};

generateBtn.addEventListener("click", buttonHandler);
resetBtn.addEventListener("click", resetHandler);

regenerateSlots();
history.init();
console.log(slotsLogic.getCount());
