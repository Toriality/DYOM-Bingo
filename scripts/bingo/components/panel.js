import { score } from "./score.js";
import { timer } from "./timer.js";
import { buttons } from "./buttons.js";
import { options } from "./options.js";

export const panel = {
  createIn: (div) => {
    let scoreDiv = document.createElement("div");
    let timerDiv = document.createElement("div");
    let optionsDiv = document.createElement("div");
    let buttonsDiv = document.createElement("div");

    scoreDiv.className = "textBox";
    timerDiv.className = "textBox";

    scoreDiv.id = "score";
    timerDiv.id = "time";
    optionsDiv.id = "options";
    buttonsDiv.id = "buttons";

    score.createIn(scoreDiv);
    timer.createIn(timerDiv);
    options.createIn(optionsDiv);
    buttons.createIn(buttonsDiv);

    div.appendChild(scoreDiv);
    div.appendChild(timerDiv);
    div.appendChild(optionsDiv);
    div.appendChild(buttonsDiv);
  },
};
