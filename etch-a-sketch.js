//variable and constant declaration

let columns = 100;
const sketchBox = [];
const sketchContainer = document.querySelector(".sketchContainer");
const sizeButton = document.querySelector(".sizeButton");
const shakeButton = document.querySelector(".shakeButton");

sizeButton.addEventListener("click", () => sizePrompt());
shakeButton.addEventListener("click", () => clearContainer());

sketchContainer.style.cssText += `grid-template-columns: repeat(${columns}, 1fr);`;
displayGrid(columns * columns);

function displayGrid(size) {
    for (let i = 0; i < size; i++) {
        sketchBox[i] = document.createElement("div");
        sketchBox[i].classList.add("sketchBox");
        sketchContainer.appendChild(sketchBox[i]);
        sketchBox[i].addEventListener("mouseover", () => {
            sketchBox[i].style.backgroundColor = "black"
        });
    }
}

function sizePrompt() {
    columns = prompt("How many columns in your etch-a-sketch? (max 100)");
    while (columns > 100) {
        columns = prompt("Sorry, that's too many. Maximum is 100.");
    }
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