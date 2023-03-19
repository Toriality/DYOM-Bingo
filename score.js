



export const score = {
    //Create score text inside supplied element
    createIn: (div) => {
        let scoreObj = score.get();
        let span = document.createElement("span");
        span.id="scoreString";
        span.innerText = "Score: " + scoreObj.win + "-" + scoreObj.lose;
        div.appendChild(span);
    },
    //Get score from localStorage
    get: () => {
        //Score is stored locally, set to 0 if not set already
        if (!localStorage.getItem("scoreWin")) localStorage.setItem("scoreWin", 0);

        if (!localStorage.getItem("scoreLose")) localStorage.setItem("scoreLose", 0);


        let score={};
        score.win = localStorage.getItem("scoreWin");
        score.lose = localStorage.getItem("scoreLose");

        return score;

    },
    //Set score in localstorage
    set: (scoreObj) => {
        localStorage.setItem("scoreWin", scoreObj.win);
        localStorage.setItem("scoreLose", scoreObj.lose);
    },

    //Increment "win" score, display it and store it
    updateWon: () => {
        let scoreObj = score.get();
        scoreObj.win++;
        document.getElementById("scoreString").innerText = "Score: " + scoreObj.win + "-" + scoreObj.lose;

        score.set(scoreObj);
    },

    //Increment "lose" score, display it and store it
    updateLost: () => {
        let scoreObj = score.get();
        scoreObj.lose++;
        document.getElementById("scoreString").innerText = "Score: " + scoreObj.win + "-" + scoreObj.lose;

        score.set(scoreObj);
    }
    
}