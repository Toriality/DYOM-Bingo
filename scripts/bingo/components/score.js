export const score = {
  //Create score text inside supplied element
  createIn(div) {
    const span = document.createElement("span");
    const score = JSON.parse(localStorage.getItem("score"));
    span.id = "scoreString";
    span.innerText = `Score: ${score.win} - ${score.lose}`;
    div.appendChild(span);
  },

  //Create localStorage for score if it doesn't exist
  init() {
    if (localStorage.getItem("score") === null) {
      localStorage.setItem("score", JSON.stringify({ win: 0, lose: 0 }));
    }
  },

  //Get score from localStorage
  get() {
    const score = JSON.parse(localStorage.getItem("score"));
    return score;
  },

  //Set score in localStorage
  set(scoreObj) {
    localStorage.setItem("score", JSON.stringify(scoreObj));
  },

  //Reset score to 0
  reset() {
    localStorage.setItem("score", JSON.stringify({ win: 0, lose: 0 }));
    document.getElementById("scoreString").innerText = "Score: 0 - 0";
  },

  //Increment "win" score, display it and store it
  updateWon() {
    const scoreObj = score.get();
    const audio = new Audio("./sound/win.wav");

    scoreObj.win++;
    document.getElementById("scoreString").innerText =
      "Score: " + scoreObj.win + "-" + scoreObj.lose;

    audio.play();
    score.set(scoreObj);
  },

  //Increment "lose" score, display it and store it
  updateLost() {
    const scoreObj = score.get();
	const audio = new Audio("./sound/lose.wav");

    scoreObj.lose++;
    document.getElementById("scoreString").innerText =
      "Score: " + scoreObj.win + "-" + scoreObj.lose;

    audio.play();
	score.set(scoreObj);
  },
};
