const ROWS = 5;
const COLS = 6;

const randomNumbers = [];
for (let i = 0; i < ROWS * COLS; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100));
}

const table = document.createElement("table");
const tbody = document.createElement("tbody");

for (let i = 0; i < ROWS; i++) {
  const row = document.createElement("tr");
  for (let j = 0; j < COLS; j++) {
    const cell = document.createElement("td");
    const index = i * COLS + j;
    const number = randomNumbers[index];
    cell.textContent = number;

    if (number >= 50) {
      cell.classList.add("orange");
    }

    row.appendChild(cell);
  }
  tbody.appendChild(row);
}

table.appendChild(tbody);
document.getElementById("tableContainer").appendChild(table);

