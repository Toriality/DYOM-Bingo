import { game } from "./bingo/game.js";

const gameDiv = document.getElementById("game");

game.init();
game.createIn(gameDiv);
game.new();

// DEBUG
document.addEventListener("keydown", (e) => {
  if (e.key === "p") {
    console.log(game);
  }
});
