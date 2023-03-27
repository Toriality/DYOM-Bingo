import { panel } from "./components/panel.js";
import { card } from "./components/card.js";
import { requirements } from "./components/requirements.js";
import { slots } from "./components/slots.js";
import { timer } from "./components/timer.js";
import { score } from "./components/score.js";
import { history } from "./components/history.js";
import { seed } from "./components/seed.js";
import { generateRandomString } from "./utils.js";
import { easter } from "./components/easter.js";

export const game = {
  id: null,
  seed: null,
  date: null,
  alreadyWon: false,
  canSkip: true,
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
    const seedDiv = document.createElement("div");
    const panelDiv = document.createElement("div");
    const historyDiv = document.getElementById("historyBox");

    cardDiv.id = "card";
    seedDiv.id = "seed";
    seedDiv.className = "textBox";
    panelDiv.id = "panel";

    card.createIn(cardDiv);
    seed.createIn(seedDiv);
    panel.createIn(panelDiv);
    history.createIn(historyDiv);

    cardDiv.appendChild(seedDiv);
    div.appendChild(cardDiv);
    div.appendChild(panelDiv);
  },

  // Use on page load to initialize localStorage values and seed
  init() {
    history.init();
    score.init();
    seed.init();
  },

  // Start a new game based on given seed
  new() {
    const id = generateRandomString();
    const gameSeed = seed.get();
    const date = new Date();

    this.id = id;
    this.seed = gameSeed;
    this.date = date.toLocaleString("en-US");
    this.canSkip = true;
    this.alreadyWon = false;
    this.requirements = requirements.get();

    slots.set(this.requirements, this.seed.value);
    history.refresh();
    card.generate(slots.get());
    score.set(this.score);
    seed.update();
    easter.check(this.seed.string);
    timer.restart();
  },

  pause() {
    timer.pause();
  },

  resume() {
    timer.resume();
  },

  // Finish the game
  finish(newSeed) {
    if (newSeed) seed.set(newSeed);
    else seed.set(generateRandomString());
    this.new();
  },

  // Save game
  save() {
    history.save({
      seed: this.seed.string,
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
    if (!this.alreadyWon) {
      score.updateWon();
      timer.win();
      this.alreadyWon = true;
    }
  },

  // Lose game
  onLose() {
    score.updateLost();
  },
};
