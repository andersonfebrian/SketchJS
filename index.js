document.addEventListener('DOMContentLoaded', (e) => {
    const grid = document.querySelector('.grid-container');
    const clear = document.querySelector('#clr-btn');
    const size = document.querySelector('#prompt-btn');
    const rainbow = document.querySelector('#rainbow-btn');
    let isRainbow = false;

    let generateGrid = (col) => {

        grid.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${col}, 1fr)`;

        for(let i = 0; i < col * col; i++) {
            const gridItem = document.createElement('div');
            gridItem.setAttribute('class', 'item');
            grid.appendChild(gridItem);
        }

        addEventListener();
        return;
    }

    let addEventListener = () => {
        const nodes = document.querySelectorAll('.item');

        nodes.forEach(dom => {
            dom.addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = isRainbow ? generateRandomRGB() : "rgb(0, 0, 0)";
            });
        });
        return;
    }

    let generateRandomRGB = () => {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        return `rgb(${r}, ${g}, ${b})`;
    }

    let clearGrid = (e) => {
        const nodes = grid.childNodes;
        nodes.forEach((dom) => {
            dom.style.backgroundColor = "rgb(255, 255, 255)";
        });
    }

    let resetGridWithSize = () => {
        let size = prompt("Enter Grid Size (ex. 15)");
        
        while(isNaN(size)) {
            size = prompt("Enter Grid Size (ex. 15)");

            if(size === null) {
                break;
            }
        }

        generateGrid(size);
    }

    clear.addEventListener('click', clearGrid);
    size.addEventListener('click', resetGridWithSize);
    rainbow.addEventListener('click', (e) => {
        isRainbow = !isRainbow;
        addEventListener();
    });

    generateGrid(16);
});