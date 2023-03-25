import { createBingoTable } from "../utils.js";
import { game } from "../game.js";
import { history } from "./history.js";

export const card = {
  // Create card table and tiles
  createIn(div) {
    const table = createBingoTable((cell, i, j) => {
      if (i === 2 && j === 2) {
        // Add these classes for the free slot in the middle
        cell.classList.add("selected", "free");
      } else {
        // Add click listener for each tile except the free slot
        cell.addEventListener("click", onTileClick);
      }
      // Add these attributes and classes for all
      cell.x = j;
      cell.y = i;
      cell.classList.add("tile");
    });

    div.appendChild(table);
  },

  // Get tiles array from HTMLElement
  get() {
    const tiles = Array.from(document.getElementsByClassName("tile"));
    return tiles;
  },

  // Set tiles from given slots
  set(slots) {
    const tiles = card.get();
    tiles.forEach((tile) => {
      const randomSlot = slots.pop();
      if (!tile.classList.contains("free")) {
        tile.innerText = randomSlot.string;
        if (randomSlot.helperText) {
          const helperText = document.createElement("span");
          helperText.innerText = randomSlot.helperText;
          tile.appendChild(helperText);
        }
      }
    });
  },

  // Clear card tiles
  reset() {
    const tiles = card.get();
    tiles.forEach((tile) => {
      tile.innerText = "";
      if (tile.classList.contains("free")) {
        tile.classList.remove("win");
      } else {
        tile.classList.remove("win", "selected");
      }
    });
  },

  // Select/Unselect tile
  toggle(tile) {
    tile.classList.toggle("selected");
  },

  // Check for game win and manipulate winning tiles' classes
  checkWin() {
    const tiles = card.get();
    let winningTiles = [];

    // Reset winning tiles and check winning tiles again
    tiles.forEach((tile) => tile.classList.remove("win"));

    //Search for winning tiles/bingo
    for (let i = 0; i < 5; i++) {
      const selectedInRow = tiles
        .filter((tile) => tile.y === i)
        .filter((tile) => tile.classList.contains("selected"));
      const selectedInColumn = tiles
        .filter((tile) => tile.x === i)
        .filter((tile) => tile.classList.contains("selected"));
      if (selectedInColumn.length === 5)
        winningTiles = winningTiles.concat(selectedInColumn);
      if (selectedInRow.length === 5)
        winningTiles = winningTiles.concat(selectedInRow);
    }
    const selectedDiagonally1 = tiles
      .filter((tile) => tile.y === tile.x)
      .filter((tile) => tile.classList.contains("selected"));
    const selectedDiagonally2 = tiles
      .filter((tile) => 4 - tile.y === tile.x)
      .filter((tile) => tile.classList.contains("selected"));
    if (selectedDiagonally1.length === 5)
      winningTiles = winningTiles.concat(selectedDiagonally1);
    if (selectedDiagonally2.length === 5)
      winningTiles = winningTiles.concat(selectedDiagonally2);

    //set different color for winning tiles
    winningTiles.forEach((tile) => tile.classList.add("win"));

    //On winning condition call function assigned from index.js
    if (winningTiles.length > 0) game.onWin();
  },

  // Generate a new card from given slots
  generate(slots) {
    card.reset();
    card.set(slots);
  },
};

const onTileClick = (e) => {
  // Disable skipping after first user interaction with the card
  game.skippable = false;

  // Toggle selection classes of tile
  card.toggle(e.target);

  // Check if player has won the game
  card.checkWin();

  // Save game every time a tile is clicked
  game.save();
};
