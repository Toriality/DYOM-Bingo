//Called every time a tile was clicked on
const tileClicked = (e) => {
  //Set/reset selection
  let tile = e.target;
  tile.selected = !tile.selected;

  let allTiles = Array.from(tiles.getAll());
  let selectedTiles = allTiles.filter((tile) => tile.selected);
  let winningTiles = [];
  //Clear tile colours
  allTiles.forEach((tile) => (tile.style.backgroundColor = ""));
  //Set colour on selected tiles
  selectedTiles.forEach((tile) => (tile.style.backgroundColor = "#ffdf70"));

  //Search for winning tiles/bingo

  for (let i = 0; i < 5; i++) {
    let selectedInRow = allTiles
      .filter((tile) => tile.y == i)
      .filter((tile) => tile.selected);
    let selectedInColumn = allTiles
      .filter((tile) => tile.x == i)
      .filter((tile) => tile.selected);
    if (selectedInColumn.length == 5)
      winningTiles = winningTiles.concat(selectedInColumn);
    if (selectedInRow.length == 5)
      winningTiles = winningTiles.concat(selectedInRow);
  }
  let selectedDiagonally1 = allTiles
    .filter((tile) => tile.y == tile.x)
    .filter((tile) => tile.selected);
  let selectedDiagonally2 = allTiles
    .filter((tile) => 4 - tile.y == tile.x)
    .filter((tile) => tile.selected);
  if (selectedDiagonally1.length == 5)
    winningTiles = winningTiles.concat(selectedDiagonally1);
  if (selectedDiagonally2.length == 5)
    winningTiles = winningTiles.concat(selectedDiagonally2);

  //set different color for winning tiles
  winningTiles.forEach((tile) => (tile.style.backgroundColor = "#8dff70"));

  //On winning condition call function assigned from index.js
  if (winningTiles.length > 0 && tiles.onWin != null) tiles.onWin();
};

export const tiles = {
  //Function assigned by index.js
  onWin: null,

  //Create tiles inside supplied element
  createIn: (div) => {
    // Create table element
    let table = document.createElement("table");
    // Create a 5x5 bingo table and add it to dyom div
    for (let i = 0; i < 5; i++) {
      let row = document.createElement("tr");
      for (let j = 0; j < 5; j++) {
        let cell = document.createElement("td");
        cell.className = "tile";
        cell.y = i;
        cell.x = j;
        cell.addEventListener("click", tileClicked);
        row.appendChild(cell);
      }
      table.appendChild(row);
    }
    div.appendChild(table);
  },

  //add new text to each tile according to newSlots
  regenerate: (newSlots) => {
    tiles.getAll().forEach((thisSlot) => {
      let randomSlot = newSlots.pop();

      thisSlot.selected = false;
      thisSlot.style.backgroundColor = "";
      thisSlot.innerText = randomSlot.string;
      if (randomSlot.helperText) {
        let helperText = document.createElement("span");
        helperText.innerText = randomSlot.helperText;
        thisSlot.appendChild(helperText);
      }
    });
  },

  //Return all tiles
  getAll: () => {
    return Array.from(document.getElementsByClassName("tile"));
  },
};
