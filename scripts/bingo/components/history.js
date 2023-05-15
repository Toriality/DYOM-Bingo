import {
  createBingoTable,
  createModal,
  toHours,
  toMilliseconds,
  toMinutes,
  toSeconds,
} from "../utils.js";

const createModalContent = (seed, date, score, time, pb, card) => {
  // prettier-ignore
  const timeDate = `${toHours(time)}:${toMinutes(time)}:${toSeconds(time)}`;
  // prettier-ignore
  let pbDate = `${toHours(pb)}:${toMinutes(pb)}:${toSeconds(pb)}`;
  if (pbDate === "00:00:00") pbDate = "Not set yet";

  const dateDiv = document.createElement("div");
  dateDiv.id = "date";
  dateDiv.innerHTML = `<p>Date: ${date}</p>`;

  const infoDiv = document.createElement("div");
  infoDiv.id = "info";
  infoDiv.innerHTML = `
    <p>Score: ${score.win} - ${score.lose}</p>
    <p>Time: ${timeDate}</p>
    <p>PB: ${pbDate}</p>
    <p>Seed: ${seed}</p>
  `;

  // Create table with strings
  const table = createBingoTable((cell, i, j) => {
    const slot = card.slots.find((slot) => slot.x === j && slot.y === i);
    cell.innerText = slot.string;
    if (slot.selected) cell.classList.add("selected");
    if (slot.win) cell.classList.add("win");
  });
  const cardDiv = document.createElement("div");
  cardDiv.id = "card";
  cardDiv.appendChild(table);

  const content = document.createElement("div");
  content.appendChild(dateDiv);
  content.appendChild(cardDiv);
  content.appendChild(infoDiv);
  return content;
};

export const history = {
  div: null,

  init() {
    //Create localStorage for history if it doesn't exist
    if (localStorage.getItem("history") === null) {
      localStorage.setItem("history", JSON.stringify([]));
    }
  },

  createIn(div) {
    if (history.get() === null) return;

    history.get().forEach((cardData) => {
      const card = cardData.card;

      //Create cards
      const cardDiv = document.createElement("div");
      cardDiv.className = "card";
      cardDiv.id = cardData.id;

      //Create table without strings
      const table = createBingoTable((cell, i, j) => {
        const slot = card.slots.find((slot) => slot.x === j && slot.y === i);
        if (slot.selected) cell.classList.add("selected");
        if (slot.win) cell.classList.add("win");
      });
      const helperText = document.createElement("span");
      helperText.innerText = "Click to view details";
      table.appendChild(helperText);
      cardDiv.appendChild(table);
      div.appendChild(cardDiv);

      //Create modal content
      const content = createModalContent(
        cardData.seed,
        cardData.date,
        cardData.score,
        cardData.time,
        cardData.pb,
        card
      );
      createModal(table, content);
    });

    history.div = div;
  },

  // Updates the last card in the history
  update() {
    const lastGame = history.get()[history.get().length - 1];
    const lastDiv = history.div.querySelector(".card:last-child");
    const card = lastGame.card;

    // Check if last card is the current unfinished game
    if (lastGame?.id === lastDiv?.id) {
      lastDiv.classList.add("current");
    }

    let cardDiv = history.div.querySelector(".card.current");
    if (!cardDiv) {
      cardDiv = document.createElement("div");
      cardDiv.classList.add("card", "current");
      history.div.appendChild(cardDiv);
    }

    const table = createBingoTable((cell, i, j) => {
      const slot = card.slots.find((slot) => slot.x === j && slot.y === i);
      if (slot.selected) cell.classList.add("selected");
      if (slot.win) cell.classList.add("win");
    });

    cardDiv.innerHTML = "";
    cardDiv.appendChild(table);
  },

  // Refresh div
  refresh() {
    history.div.innerHTML = "";
    history.createIn(history.div);
  },

  // Save card
  save({ status, seed, id, date, score, time, pb, card, alreadyWon }) {
    //Parse history data from localStorage to json
    let historyData = JSON.parse(localStorage.getItem("history"));

    //Save current card to localStorage
    const storedCard = {
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
    const cardIndex = historyData.findIndex((card) => card.id === id);
    if (cardIndex === -1) {
      //New card
      historyData.push({
        status: status,
        seed: seed,
        id: id,
        date: date,
        score: score,
        time: time,
        pb: pb,
        card: storedCard,
        alreadyWon: alreadyWon,
      });
    } else {
      //Existing card
      historyData[cardIndex] = {
        ...historyData[cardIndex],
        status: status,
        seed: seed,
        score: score,
        time: time,
        pb: pb,
        card: storedCard,
        alreadyWon: alreadyWon,
      };
    }
    localStorage.setItem("history", JSON.stringify(historyData));
  },

  reset() {
    localStorage.setItem("history", JSON.stringify([]));
  },

  get() {
    const historyData = JSON.parse(localStorage.getItem("history"));
    return historyData;
  },

  restorePoint() {
    // Restore last card if it contains status of unfinished
    const lastCard = history.get()[history.get().length - 1];
    if (lastCard?.status === "unfinished") return lastCard;
    else return null;
  },
};
