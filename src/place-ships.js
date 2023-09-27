let length = 0;
let vertical = false;
let placedShips = [];
let tiles = [];
let taken = [];

const setupShipSizeVariability = (shipsContainer) => {
    Array.from(shipsContainer.children).forEach((ship) => {
        ship.addEventListener('click', () => {
            if (!ship.classList.contains('placed'))
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
                if (!taken.includes(true)) giveTilesClass(tiles, 'hover');
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
                removeTilesClass(nonTaken, 'hover');
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

const giveTilesClass = (tiles, className) => {
    tiles.forEach((tile) => {
        if (className) tile.classList.add(className);
    });
};

const removeTilesClass = (tiles, className) => {
    tiles.forEach((tile) => {
        if (className) tile.classList.remove(className);
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
                    !tiles
                        .map((tile) => tile.classList.contains('taken'))
                        .includes(true) &&
                    length !== 0
                ) {
                    tiles.forEach((tile) => {
                        tile.classList.add('taken');
                        tile.classList.remove('hover');
                    });
                    let ships = document.querySelectorAll(
                        `[length="${length}"]`
                    );
                    let ship = Array.from(ships).filter(
                        (ship) => !ship.classList.contains('placed')
                    )[0];
                    ship.classList.add('placed');
                    length = 0;
                    placedShips.push({
                        p1: [
                            ~~tiles[0].getAttribute('x'),
                            ~~tiles[0].getAttribute('y'),
                        ],
                        p2: [
                            ~~tiles.slice(-1)[0].getAttribute('x'),
                            ~~tiles.slice(-1)[0].getAttribute('y'),
                        ],
                    });
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

export { placedShips };
