//variable and constant declaration

const sketchBox = [];
const sketchContainer = document.querySelector(".sketchContainer");
const setButton = document.querySelector(".setButton");
const shakeButton = document.querySelector(".shakeButton");
const settings = document.querySelector(".settings");
const blackButton = document.querySelector(".blackButton");
const rainbowButton = document.querySelector(".rainbowButton");
const colorPicker = document.querySelector(".colorButton");

let color = [];
let input = document.querySelector("#columns");
let columns = input.value;

setButton.addEventListener("click", () => settingMenu());
shakeButton.addEventListener("click", () => clearContainer());
blackButton.addEventListener("click", () => black());
rainbowButton.addEventListener("click", () => rainbow());
colorPicker.addEventListener("input", () => customColor());
input.addEventListener("input", () => {
    columns = input.value
    clearContainer()
});

black();
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

function settingMenu() {
    if (settings.style.visibility === "hidden") {
        settings.style.visibility = "visible";
    } else {
        settings.style.visibility = "hidden";
    }
}

function black() {
    color = [];
    for (let i = 0; i < 7; i++) {
        color.push("black");
    }
    blackButton.classList.add("blackOn");
    rainbowButton.classList.remove("rainbowOn");
    colorPicker.value = "#b0e0e6";
    colorPicker.style.backgroundColor = "#b0e0e6";
}

function rainbow() {
    color = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    rainbowButton.classList.add("rainbowOn");
    blackButton.classList.remove("blackOn");
    colorPicker.value = "#b0e0e6";
    colorPicker.style.backgroundColor = "#b0e0e6";
}

function customColor() {
    let pick = colorPicker.value;
    color = [];
    for (let i = 0; i < 7; i++) {
        color.push(pick);
    }
    colorPicker.style.backgroundColor = pick;
    rainbowButton.classList.remove("rainbowOn");
    blackButton.classList.remove("blackOn");
}

function clearContainer() {
    let children = sketchContainer.firstElementChild;
    while (children) {
        children.remove();
        children = sketchContainer.firstElementChild;
    }
    displayGrid(columns);
}