// Generates a random string
export function generateRandomString() {
  return Math.random().toString(16).slice(2);
}

// Create 5x5 bingo table
// cellSettings(cell, i, j) = additional code for each cell
export const createBingoTable = (cellSettings) => {
  const table = document.createElement("table");
  for (let i = 0; i < 5; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 5; j++) {
      const cell = document.createElement("td");
      cellSettings(cell, i, j);
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  return table;
};

// Create modal content
// div = the div that opens the modal when clicked
// content = content to be inserted inside modal
export const createModal = (div, content) => {
  const modalDiv = document.getElementById("modal");
  const modalContent = document.getElementById("modalContent");
  const modalClose = document.getElementById("modalClose");

  div.addEventListener("click", () => {
    modalDiv.classList.add("active");
    modalContent.appendChild(content);
  });
  modalClose.addEventListener("click", () => {
    modalDiv.classList.remove("active");
    modalContent.innerHTML = "";
  });
};

// Time functions
export const toHours = (current) => {
  return Math.floor((current / (1000 * 60 * 60)) % 24)
    .toString()
    .padStart(2, "0");
};
export const toMinutes = (current) => {
  return Math.floor((current / (1000 * 60)) % 60)
    .toString()
    .padStart(2, "0");
};
export const toSeconds = (current) => {
  return Math.floor((current / 1000) % 60)
    .toString()
    .padStart(2, "0");
};
export const toMilliseconds = (current) => {
  return Math.floor((current % 1000) / 10)
    .toString()
    .padStart(2, "0");
};
