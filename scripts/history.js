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

  get: () => {},
};
