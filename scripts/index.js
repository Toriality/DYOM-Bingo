import { game } from "./bingo/game.js";

const gameDiv = document.getElementById("game");

game.init();
game.createIn(gameDiv);
game.new();

console.log(game.seed.value, game.seed.string);

// DEBUG
document.addEventListener("keydown", (e) => {
  if (e.key === "p") {
    console.log(game);
  }
});
