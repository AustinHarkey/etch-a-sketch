let canvas = document.querySelector('.sketch');
let btnsColor = [...document.querySelectorAll('.btn__color')];
let btnSize = [...document.querySelectorAll('.btn__size')];


let gridSize = 4;

// use for loop to create grid
const grid = (size, color) => {
    canvas.innerHTML = '';
    let squares = size * size;
    for(let i = 0; i < squares; i++) {
        let square = document.createElement('div');
        square.classList.add('sketch__square');
        square.style.setProperty('width', `calc(100% / ${size})`);
        canvas.appendChild(square);
        square.addEventListener('mouseover', color)
    }
}

const black = (e) => {
    e.target.style.backgroundColor = '#000';
}

const rainbow = (e) => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = `rgb(${r}, ${g}, ${b})`;
    e.target.style.backgroundColor = color;
}

btnsColor.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if(e.target.classList.contains('black')) {
            penColor = black;
            run();
        } else {
            penColor = rainbow;
            run();
        }
    })
});

btnSize.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if(e.target.classList.contains('small')) {
            gridSize = 4;
            run();
        } else if (e.target.classList.contains('medium')) {
            gridSize = 8;
            run();
        } else {
            gridSize = 16;
            run();
        }
    })
});

const run = () => {
    grid(gridSize, penColor);
}

// default state
let penColor = black;

run();


