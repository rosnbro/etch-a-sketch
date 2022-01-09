//variable and constant declaration

let columns = 100;
const color = ["black"];
const sketchBox = [];
const sketchContainer = document.querySelector(".sketchContainer");
const setButton = document.querySelector(".setButton");
const shakeButton = document.querySelector(".shakeButton");

setButton.addEventListener("click", () => sizePrompt());
shakeButton.addEventListener("click", () => clearContainer());

sketchContainer.style.cssText += `grid-template-columns: repeat(${columns}, 1fr);`;
displayGrid(columns * columns);

function displayGrid(size) {
    for (let i = 0; i < size; i++) {
        sketchBox[i] = document.createElement("div");
        sketchBox[i].classList.add("sketchBox");
        sketchContainer.appendChild(sketchBox[i]);
        sketchBox[i].addEventListener("mouseover", () => {
                sketchBox[i].style.backgroundColor = color[0];
        });
    }
}

function colorSelect() {
    color = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    color = ["black"];
}

function sizePrompt() {
    do {
        columns = prompt("Resolution: Please input an integer from from 1 to 100.");
    } while (columns == null || columns <= 0 || columns > 100)
    sketchContainer.style.cssText += `grid-template-columns: repeat(${columns}, 1fr);`;
    clearContainer();
}

function clearContainer() {
    let children = sketchContainer.firstElementChild;
    while (children) {
        children.remove();
        children = sketchContainer.firstElementChild;
    }
    displayGrid(columns * columns);
}