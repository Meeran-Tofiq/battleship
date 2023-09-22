let length = 0;
let vertical = false;

const setupShipSizeVariability = (shipsContainer) => {
    Array.from(shipsContainer.children).forEach((ship) => {
        ship.addEventListener('click', () => {
            length = ship.getAttribute('length');
        });
    });
};

const setupShipHoverOverPlayerBoard = (playerBoard) => {
    Array.from(playerBoard.children).forEach((row) => {
        Array.from(row.children).forEach((tile) => {
            tile.addEventListener('mouseenter', () => {
                let x = ~~tile.getAttribute('x');
                let y = ~~tile.getAttribute('y');
                if (vertical) {
                    if (y > 10 - length) return false;
                } else {
                    if (x > 10 - length) return false;
                }

                let arr = getShipTiles(x, y, playerBoard);
                colorTiles(arr, '#03bb00');
            });
            tile.addEventListener('mouseout', () => {
                let x = ~~tile.getAttribute('x');
                let y = ~~tile.getAttribute('y');
                if (vertical) {
                    if (y > 10 - length) return false;
                } else {
                    if (x > 10 - length) return false;
                }

                let arr = getShipTiles(x, y, playerBoard);
                colorTiles(arr, 'white');
            });
        });
    });
};

const getShipTiles = (x, y, playerBoard) => {
    let main, secondary;
    let mName, sName;
    if (vertical) {
        main = y;
        secondary = x;
        mName = 'y';
        sName = 'x';
    } else {
        main = x;
        secondary = y;
        mName = 'x';
        sName = 'y';
    }
    let arr = Array.from(
        playerBoard.querySelectorAll(`[${sName}="${secondary}"]`)
    );

    arr = arr.filter((tile) => tile.getAttribute(`${mName}`) >= main);
    arr = arr.filter(
        (tile) => tile.getAttribute(`${mName}`) <= ~~main + ~~length - 1
    );
    return arr;
};

const colorTiles = (tiles, color) => {
    tiles.forEach((tile) => {
        tile.style.backgroundColor = color;
    });
};

const setupShipRotationButton = (btn) => {
    btn.addEventListener('click', () => {
        vertical = !vertical;
    });
};

export {
    setupShipSizeVariability,
    setupShipHoverOverPlayerBoard,
    setupShipRotationButton,
};
