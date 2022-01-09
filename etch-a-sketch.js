//variable and constant declaration

const sketchBox = [];
const sketchContainer = document.querySelector(".sketchContainer");
const setButton = document.querySelector(".setButton");
const shakeButton = document.querySelector(".shakeButton");
const settings = document.querySelector(".settings");
const blackButton = document.querySelector(".blackButton");
const rainbowButton = document.querySelector(".rainbowButton");

let color = ["black", "black", "black", "black", "black", "black", "black"];
let input = document.querySelector("#columns");
let columns = input.value;

setButton.addEventListener("click", () => sizePrompt());
shakeButton.addEventListener("click", () => clearContainer());
blackButton.addEventListener("click", () => {
    color = ["black", "black", "black", "black", "black", "black", "black"]
});
rainbowButton.addEventListener("click", () => {
    color = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
});
input.addEventListener("input", () => {
    columns = input.value
    clearContainer()
});

displayGrid(columns);

function displayGrid(columns) {
    let size = columns * columns;
    sketchContainer.style.cssText += `grid-template-columns: repeat(${columns}, 1fr);`;

    for (let i = 0; i < size; i++) {
        let randomColor = Math.floor(Math.random() * 7);
        sketchBox[i] = document.createElement("div");
        sketchBox[i].classList.add("sketchBox");
        sketchBox[i].addEventListener("mouseover", () => {
            sketchBox[i].style.backgroundColor = color[randomColor];
        });
        sketchContainer.appendChild(sketchBox[i]);
    }
}

function sizePrompt() {
    //do {
    //    columns = prompt("Resolution: Please input an integer from from 1 to 100.");
    //} while (columns == null || columns <= 0 || columns > 100)
    //clearContainer();
}

function clearContainer() {
    let children = sketchContainer.firstElementChild;
    while (children) {
        children.remove();
        children = sketchContainer.firstElementChild;
    }
    displayGrid(columns);
}