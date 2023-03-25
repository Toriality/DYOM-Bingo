import { game } from "../game.js";
import { history } from "./history.js";
import { score } from "./score.js";
import { timer } from "./timer.js";

export const buttons = {
  createIn(div) {
    const generateBtn = document.createElement("button");
    const resetBtn = document.createElement("button");

    generateBtn.id = "generate";
    resetBtn.id = "reset";

    generateBtn.type = "button";
    resetBtn.type = "button";

    generateBtn.innerText = "Generate new card";
    resetBtn.innerText = "Reset game";

    generateBtn.addEventListener("click", () => {
      // Start new game if it can skip or player already won
      if (game.canSkip || game.alreadyWon) game.finish();
      // Else show a confirmation dialog and let the player decide
      else {
        const shouldStartNew = confirm(
          "Are you sure you want to generate a new card? You will lose a point."
        );
        if (shouldStartNew) {
          game.onLose();
          game.finish();
        }
      }
    });

    // Reset everything
    resetBtn.addEventListener("click", () => {
      const shouldReset = confirm(
        "Are you sure you want to reset your stats? All the data will be lost."
      );
      if (shouldReset) {
        score.reset();
        timer.resetPB();
        history.reset();
        game.finish();
      }
    });

    div.appendChild(generateBtn);
    div.appendChild(resetBtn);
  },
};
