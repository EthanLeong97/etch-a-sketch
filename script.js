let numberCells = 16;
let width = 200;


function createGrid(numberCells) {
    // create a new box div every time, so we can cleanly delete and re-make with the removeGrid() function
    const box = document.createElement('div');
    box.className = 'container';

    // newCont is an empty div we can use to reliably append box to
    const newCont = document.querySelector('.parent-container');
    newCont.appendChild(box);

    // assign values in JS and pass to CSS
    box.style.cssText = `height: ${width}vh; width: ${width}vh; grid-template-columns: repeat(${numberCells}, calc(${width}vh/${numberCells}));`;

    // build the pixels— can make 'mouseover' into something like 'mousedown'
    for (let i = 0; i < numberCells ** 2; i++) {
        const square = document.createElement('div');
        square.addEventListener('mouseover', () => square.classList.add('pixel'));
        box.appendChild(square);
    }
}

function clearGrid() {
    // finds every pixel and turns classes off
    const squares = document.querySelectorAll('.pixel');
    squares.forEach(square => square.classList.remove('pixel'));
}

function removeGrid() {
    // remove every box instance
    const boxes = document.querySelectorAll('.container');
    boxes.forEach(box => box.remove())

}

const reset = document.querySelector('.reset');
reset.addEventListener('click', clearGrid);

const pixelSize = document.querySelector('.pixel-size');
pixelSize.addEventListener('click', () => {
    // input validation
    do {
        newSize = +prompt('Change the row size-\nNumbers only. Less than 101. Negatives make horizontal bars.');
    } while(isNaN(newSize) || newSize > 100);
    // we did integer conversion so the return value of cancel is 0
    if (!newSize) return;

    removeGrid();
    createGrid(newSize);
});

createGrid(numberCells);
