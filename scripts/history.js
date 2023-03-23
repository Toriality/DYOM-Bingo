import {
  createBingoTable,
  createModal,
  toHours,
  toMilliseconds,
  toMinutes,
  toSeconds,
} from "./utils.js";

const createModalContent = (date, score, time, pb, card) => {
  // prettier-ignore
  let timeDate = `${toHours(time)}:${toMinutes(time)}:${toSeconds(time)}:${toMilliseconds(time)}`;
  // prettier-ignore
  let pbDate = `${toHours(pb)}:${toMinutes(pb)}:${toSeconds(pb)}:${toMilliseconds(pb)}`;
  if (pbDate == "00:00:00:00") pbDate = "Not set yet";

  let dateDiv = document.createElement("div");
  dateDiv.id = "date";
  dateDiv.innerHTML = `<p>Date: ${date}</p>`;

  let infoDiv = document.createElement("div");
  infoDiv.id = "info";
  infoDiv.innerHTML = `
    <p>Score: ${score.win} - ${score.lose}</p>
    <p>Time: ${timeDate}</p>
    <p>PB: ${pbDate}</p>
  `;

  // Create table with strings
  let table = createBingoTable((cell, i, j) => {
    let slot = card.slots.find((slot) => slot.x === j && slot.y === i);
    cell.innerText = slot.string;
    if (slot.selected) cell.classList.add("selected");
    if (slot.win) cell.classList.add("win");
  });
  let cardDiv = document.createElement("div");
  cardDiv.id = "card";
  cardDiv.appendChild(table);

  let content = document.createElement("div");
  content.appendChild(dateDiv);
  content.appendChild(cardDiv);
  content.appendChild(infoDiv);
  return content;
};

export const history = {
  init: () => {
    //Create localStorage for history if it doesn't exist
    if (localStorage.getItem("history") == null) {
      localStorage.setItem("history", JSON.stringify([]));
    }
  },

  createIn: (div) => {
    if (history.get() === null) return;

    history.get().forEach((cardData) => {
      let card = cardData.card;

      //Create cards
      let cardDiv = document.createElement("div");
      cardDiv.className = "card";

      //Create table without strings
      let table = createBingoTable((cell, i, j) => {
        let slot = card.slots.find((slot) => slot.x === j && slot.y === i);
        if (slot.selected) cell.classList.add("selected");
        if (slot.win) cell.classList.add("win");
      });
      let helperText = document.createElement("span");
      helperText.innerText = "Click to view details";
      table.appendChild(helperText);
      cardDiv.appendChild(table);
      div.appendChild(cardDiv);

      //Create modal content
      let content = createModalContent(
        cardData.date,
        cardData.score,
        cardData.time,
        cardData.pb,
        card
      );
      createModal(table, content);
    });
  },

  updateIn: (div) => {
    let card = history.get()[history.get().length - 1].card;
    let cardDiv = div.querySelector(".card.current");

    if (!cardDiv) {
      cardDiv = document.createElement("div");
      cardDiv.classList.add("card", "current");
      div.appendChild(cardDiv);
    }

    let table = createBingoTable((cell, i, j) => {
      let slot = card.slots.find((slot) => slot.x === j && slot.y === i);
      if (slot.selected) cell.classList.add("selected");
      if (slot.win) cell.classList.add("win");
    });

    cardDiv.innerHTML = "";
    cardDiv.appendChild(table);
  },

  reRenderIn: (div) => {
    div.innerHTML = "";
    history.createIn(div);
  },

  save: ({ id, date, score, time, pb, card }) => {
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
      //Get string until \n is reached
      //Because helperText is contained inside innerText and should be removed
      let string = slot.innerText;
      if (slot.innerText.includes("\n")) {
        string = slot.innerText.slice(0, slot.innerText.indexOf("\n"));
      }

      storedCard.slots[i] = {
        x: slot.x,
        y: slot.y,
        string: string,
        selected: !!slot.classList.contains("selected"),
        win: !!slot.classList.contains("win"),
      };
    });

    //Finish save process by editing the card if its already stored in localStorage
    //or adding a new card if ID is not found there
    let cardIndex = historyData.findIndex((card) => card.id === id);
    if (cardIndex === -1) {
      //New card
      historyData.push({
        id: id,
        date: date,
        score: score,
        time: time,
        pb: pb,
        card: storedCard,
      });
    } else {
      //Existing card
      historyData[cardIndex] = {
        ...historyData[cardIndex],
        score: score,
        time: time,
        pb: pb,
        card: storedCard,
      };
    }
    localStorage.setItem("history", JSON.stringify(historyData));
  },

  reset: () => {
    localStorage.setItem("history", JSON.stringify([]));
  },

  get: () => {
    let historyData = JSON.parse(localStorage.getItem("history"));
    return historyData;
  },
};
