const pixelElements = document.getElementsByTagName("div");
let CANVAS_SIZE = 600;
let canvas = document.getElementById("canvas")
canvas.style.width = CANVAS_SIZE + "px";
canvas.style.height = CANVAS_SIZE + "px";
const pixels = Array.from(pixelElements);
const clrBtn = document.getElementById("clear");

function clearCanvas() {
    canvas.innerHTML = "";
    const setCanvasSize = prompt("please enter canvas size max 100 pixels")
    if (setCanvasSize <= 100) {
    let ROWS = setCanvasSize;
    let COLUMNS = setCanvasSize;
    let PIXEL = CANVAS_SIZE / ROWS;
    initializeCanvas(ROWS, COLUMNS, PIXEL);
    } else {
        alert("canvas size must be les than 100 pixels")
        clearCanvas()
    }
}

clrBtn.addEventListener('click', clearCanvas);

function initializeCanvas(ROWS, COLUMNS, PIXEL) {
    for (let i = 0; i < ROWS; i++) {
        for (let x = 0; x < COLUMNS; x++) {
            let pixel = document.createElement("div");
            pixel.style.position = "absolute";
            pixel.style.border = "0.5px solid black";
            pixel.style.left = x * PIXEL + "px";
            pixel.style.top = i * PIXEL + "px";
            pixel.style.width = PIXEL + "px";
            pixel.style.height = PIXEL + "px";
            canvas.appendChild(pixel);
        }
    }
}

pixels.forEach(p => {
    p.addEventListener("click", addColor);
});

function addColor(event) {
    let getCurrent = event.target.classList.value;

    if (getCurrent === "") {
        event.target.classList.add("fade1")
    } else if (getCurrent == "fade1") {
        event.target.classList.remove("fade1")
        event.target.classList.add("fade2")
    } else if (getCurrent == "fade2") {
        event.target.classList.remove("fade2")
        event.target.classList.add("fade3")
    } else if (getCurrent == "fade3") {
        event.target.classList.remove("fade3")
        event.target.classList.add("fade4")
    } else if (getCurrent == "fade4") {
        event.target.classList.remove("fade4")
        event.target.classList.add("fade5")
    }
}


