import { panel } from "./components/panel.js";
import { card } from "./components/card.js";
import { requirements } from "./components/requirements.js";
import { slots } from "./components/slots.js";
import { timer } from "./components/timer.js";
import { score } from "./components/score.js";
import { history } from "./components/history.js";

export const game = {
  id: null,
  date: null,
  alreadyWon: false,
  skippable: true,
  requirements: [],

  get score() {
    return score.get();
  },
  get time() {
    return timer.getTime();
  },
  get pb() {
    return timer.getPB();
  },
  get card() {
    return card.get();
  },

  createIn(div) {
    const cardDiv = document.createElement("div");
    const panelDiv = document.createElement("div");
    const historyDiv = document.getElementById("historyBox");

    cardDiv.id = "card";
    panelDiv.id = "panel";

    card.createIn(cardDiv);
    panel.createIn(panelDiv);
    history.createIn(historyDiv);

    div.appendChild(cardDiv);
    div.appendChild(panelDiv);
  },

  // Use on page laod to initialize localStorage values
  init() {
    history.init();
    score.init();
  },

  // Start a new game
  new() {
    const id = Math.random().toString(16).slice(2);
    const date = new Date();
    game.date = date.toLocaleString("en-US");
    game.id = id;
    game.skippable = true;
    game.alreadyWon = false;

    game.requirements = requirements.get();
    slots.set(game.requirements);

    history.refresh();
    card.generate(slots.get());
    score.set(game.score);
    timer.restart();
  },

  // Save game
  save() {
    history.save({
      id: this.id,
      date: this.date,
      score: this.score,
      time: this.time,
      pb: this.pb,
      card: this.card,
    });
    history.update();
  },

  // Win game
  onWin() {
    if (!game.alreadyWon) {
      score.updateWon();
      timer.win();
      game.alreadyWon = true;
    }
  },

  // Lose game
  onLose() {
    score.updateLost();
  },
};
