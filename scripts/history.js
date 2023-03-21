/* All the data below corresponds to the data that was saved when the card was stored
[
    {
       date: date
       score: { win, lost }
       time: time elapsed
       pb: user's pb score
       card: {
        slots: [
            {
                x, y, string, selected, win
            }
        ]
       }
    }
]

*/

export const history = {
  init: () => {
    //Create localStorage for history if it doesn't exist
    if (localStorage.getItem("history") == null) {
      localStorage.setItem("history", JSON.stringify([]));
    }
  },

  createIn: (div) => {
    if (history.get() === null) return;

    let table = document.createElement("table");
    let row = document.createElement("tr");
    history.get().forEach((cardData) => {
      let card = cardData.card;
      //Create cards
      let cardDiv = document.createElement("div");
      cardDiv.className = "card";

      //Create table
      let table = document.createElement("table");
      let helperText = document.createElement("span");
      helperText.innerText = "Click to view details";
      table.appendChild(helperText);
      for (let i = 0; i < 5; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < 5; j++) {
          let cell = document.createElement("td");
          let slot = card.slots.find((slot) => slot.x === j && slot.y === i);
          //cell.innerText = slot.string;
          if (slot.selected) cell.classList.add("selected");
          if (slot.win) cell.classList.add("win");
          row.appendChild(cell);
        }
        table.appendChild(row);
      }
      cardDiv.appendChild(table);
      div.appendChild(cardDiv);
    });
  },

  save: ({ date, score, time, pb, card }) => {
    //Parse history data from localStorage to json
    let historyData = JSON.parse(localStorage.getItem("history"));

    //Save current card to localStorage
    let storedCard = {
      slots: [],
    };

    card.forEach((slot) => {
      storedCard.slots.push(slot);
    });

    storedCard.slots.forEach((slot, i) => {
      storedCard.slots[i] = {
        x: slot.x,
        y: slot.y,
        string: slot.innerText,
        selected: !!slot.classList.contains("selected"),
        win: !!slot.classList.contains("win"),
      };
    });

    historyData.push({
      date,
      score,
      time,
      pb,
      card: storedCard,
    });

    localStorage.setItem("history", JSON.stringify(historyData));
  },

  get: () => {
    let historyData = JSON.parse(localStorage.getItem("history"));
    return historyData;
  },
};
