import { game } from "./bingo/game.js";

const gameDiv = document.getElementById("game");

game.init();
game.createIn(gameDiv);
if (game.shouldStartNewGame) game.new();
else game.load();

// DEBUG
document.addEventListener("keydown", (e) => {
  if (e.key === "p") {
    console.log(game);
  }
});
