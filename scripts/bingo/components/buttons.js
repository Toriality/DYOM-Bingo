import { game } from "../game.js";
import { history } from "./history.js";
import { score } from "./score.js";
import { timer } from "./timer.js";

export const buttons = {
  createIn(div) {
    const applyBtn = document.createElement("button");
    const generateBtn = document.createElement("button");
    const resetBtn = document.createElement("button");

    applyBtn.id = "apply";
    generateBtn.id = "generate";
    resetBtn.id = "reset";

    applyBtn.type = "button";
    generateBtn.type = "button";
    resetBtn.type = "button";

    applyBtn.innerText = "Apply filters/seed";
    generateBtn.innerText = "Generate new card";
    resetBtn.innerText = "Reset game";

    applyBtn.addEventListener("click", () => {
      const seed = document.querySelector("#seedInput input").value;
      checkAndFinish(seed);
    });

    generateBtn.addEventListener("click", () => {
      checkAndFinish();
    });

    // Reset everything
    resetBtn.addEventListener("click", () => {
      const shouldReset = confirm(
        "Are you sure you want to reset your stats? All the data will be lost."
      );
      if (shouldReset) {
        game.finish();
        score.reset();
        timer.resetPB();
        history.reset();
        history.refresh();
      }
    });

    div.appendChild(applyBtn);
    div.appendChild(generateBtn);
    div.appendChild(resetBtn);
  },
};

const checkAndFinish = (seed) => {
  // Start new game if it can skip or player already won
  if (game.canSkip || game.alreadyWon) game.finish(seed);
  // Else show a confirmation dialog and let the player decide
  else {
    const shouldStartNew = confirm(
      "Are you sure you want to generate a new card? You will lose a point."
    );
    if (shouldStartNew) {
      game.onLose();
      game.finish(seed);
    }
  }
};
