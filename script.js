const container = document.querySelector("#container");
const resizeGrid = document.getElementById("resizeGrid");
const resetBtn = document.getElementById("resetBtn");


//Randomize Colors
const red = Math.round(Math.random() * 255);
const green = Math.round(Math.random() * 255);
const blue = Math.round(Math.random() * 255);


function getGrid(gridSize){
    container.innerHTML= ''; //clears up any colored squares
    container.style.setProperty('--grid-size', gridSize); //resizes the grid by setting the "--grid-size" proterty in the ":root" to user input

    for (let i = 0; i < gridSize * gridSize; i++) {  //iterate and create squares with the gridsize
        const div = document.createElement("div");
        div.classList.add("grid-item");
        container.appendChild(div);
    }
}

container.addEventListener("mouseover", event => {
    if (event.target.classList.contains("grid-item")) {
        event.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }

});

resizeGrid.addEventListener("click", () => {
    let newGridSize = prompt("Enter a grid number from 2-99: ")
    if (newGridSize > 99 || newGridSize < 2) {
        alert("Error. Please enter a value form 2-99");
    }
    else{
        getGrid(newGridSize)
    }
})


getGrid(16);