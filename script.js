const headerContainer = document.querySelector(".header");
const serialNumbersContainer = document.querySelector(".sno");
const mainContainer = document.querySelector(".main");
let columns = 26;
let rows = 100;

function createHeaderCells() {
    for (let i = 0; i <= columns; i++) {
        const headerCell = document.createElement("div");
        headerCell.className = "header-cell cell";
        if (i !== 0) {
            // i = 1 => Char A => 64 + 1 => 65
            headerCell.innerText = String.fromCharCode(64 + i);
        }
        headerContainer.appendChild(headerCell)
    }
}
function createSerialNumberCells() {
    for (let i = 1; i <= rows; i++) {
        const snoCell = document.createElement("div");
        snoCell.innerText = i;
        snoCell.className = "sno-cell cell"
        serialNumbersContainer.appendChild(snoCell);
    }
}
function createRow(rowNumber) {
    // creates a row and each row will have 26 columns
    const row = document.createElement("div");
    row.className = "row";
    for (let i = 1; i <= columns; i++) {
        const cell = document.createElement("div");
        cell.className = "main-cell cell";
        cell.contentEditable = true;
        row.appendChild(cell);

        cell.id = String.fromCharCode(64 + i) + rowNumber;

        // adding focus event for every cell.
        // cell.addEventListener("focus", onCellFocus);
        // add input event as we need to record the inside the input 
        // cell.addEventListener("input", onFormChange);
    }
    mainContainer.appendChild(row);
    
}
function buildMainSection() {
    // loop for 100 times
    for (let i = 1; i <= rows; i++) {
        createRow(i);
        console.log("inside me")
    }
}




createHeaderCells();
createSerialNumberCells();
buildMainSection();


// const addsheet = document.querySelector(".btn");
// const footerdown = document.querySelector(".abc");
// const adsheet = document.querySelector(".add-sheet");

// function addnewsheet(){
//     const newsheet = document.createElement("div");
//     newsheet.className= "add-sheet";
//     newsheet.innerText = "Sheet 1";
//     footerdown.appendChild(newsheet);
// }

// addsheet.addEventListener('click', addnewsheet);

let sheetCounter = 1; // Initialize the sheet counter

function addNewSheet() {
  const sheetContainer = document.createElement("div");
  sheetContainer.className = "sheet";
  sheetContainer.innerText = "Sheet " + sheetCounter;
  sheetCounter++; // Increment the sheet counter for the next sheet

  // Assuming you want to add the new sheet inside the "body" section
  const bodySection = document.querySelector(".body .main");
  bodySection.appendChild(sheetContainer);
}

// Assuming you want to add a new sheet when clicking the ".btn" button
const addSheetButton = document.querySelector(".btn");
addSheetButton.addEventListener('click', addNewSheet);

  