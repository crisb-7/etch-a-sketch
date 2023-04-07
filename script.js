let gridLength = 16;    // Number of squares
let gridSize = 2**9;     // Grid pixel size

function createGrid(gridLength, gridSize) {
    let squareSize = gridSize/gridLength;
    const grid = document.querySelector(".grid");
    grid.style.cssText = `width: ${gridSize}px;`;
    grid.innerHTML = "";
    for (let i = 0; i < gridLength; i++) {
    
        const verticalDiv = document.createElement("div");
        verticalDiv.classList.add("vertical");
        verticalDiv.style.cssText = `flex-basis: ${squareSize}px;`;
        grid.append(verticalDiv);
    
        for (let j = 0; j < gridLength; j++) {
            const horizontalDiv = document.createElement("div");
            horizontalDiv.classList.add("horizontal");
            horizontalDiv.style.cssText = `flex-basis: ${squareSize}px;`;
            verticalDiv.append(horizontalDiv);
        }
    }
}

function allowDrawing() {
    const square = document.querySelectorAll(".horizontal");
    square.forEach((div) => {
    div.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "black";
    });
});
}

createGrid(gridLength, gridSize);
allowDrawing();

const resolutionButton = document.querySelector(".controls button");
resolutionButton.addEventListener("click", () => {
    gridLength = prompt("Please enter the number of squares for the grid.");
    gridLength = parseInt(gridLength);
    createGrid(gridLength, gridSize);
    allowDrawing();
});

const eraseDrawingButton = document.querySelector(".reset");
eraseDrawingButton.addEventListener("click", () => {
    createGrid(gridLength, gridSize);
    allowDrawing();
});