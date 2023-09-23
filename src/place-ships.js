let length = 0;
let vertical = false;
let ships = [];
let tiles = [];
let taken = [];

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

                tiles = getShipTiles(x, y, playerBoard);
                taken = tiles.map((tile) => tile.classList.contains('taken'));
                if (!taken.includes(true)) colorTiles(tiles, '#03bb00');
            });
            tile.addEventListener('mouseout', () => {
                let x = ~~tile.getAttribute('x');
                let y = ~~tile.getAttribute('y');
                if (vertical) {
                    if (y > 10 - length) return false;
                } else {
                    if (x > 10 - length) return false;
                }

                let nonTaken = tiles.filter(
                    (tile) => !tile.classList.contains('taken')
                );
                colorTiles(nonTaken, 'white');
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

const setupClickingToPlaceShip = (playerBoard) => {
    Array.from(playerBoard.children).forEach((row) => {
        Array.from(row.children).forEach((tile) => {
            tile.addEventListener('click', () => {
                if (
                    tiles.map(
                        (tile) => tile.style.backgroundColor === '#03bb00'
                    )
                ) {
                    tiles.forEach((tile) => tile.classList.add('taken'));
                }
            });
        });
    });
};

export {
    setupShipSizeVariability,
    setupShipHoverOverPlayerBoard,
    setupShipRotationButton,
    setupClickingToPlaceShip,
};
