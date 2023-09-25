import {
    setupClickingToPlaceShip,
    setupShipHoverOverPlayerBoard,
    setupShipRotationButton,
    setupShipSizeVariability,
} from './place-ships';
import { setupGameButton } from './start-game';

const loadInitialPage = () => {
    const content = document.createElement('div');
    content.classList.add('content');

    // header
    const header = createHeader();

    // main game area
    const main = createMainGameArea();

    // footer
    const footer = createFooter();

    content.append(header, main, footer);
    document.body.append(content);
};

const createHeader = () => {
    const header = document.createElement('header');

    const battleshipLogo = document.createElement('h1');
    battleshipLogo.innerText = 'Battleship';

    header.append(battleshipLogo);

    return header;
};

const createMainGameArea = () => {
    const main = document.createElement('main');

    const gameArea = document.createElement('div');
    const playerBoard = createBoard('player');
    const opponentBoard = createBoard('opponent');

    const gameButton = document.createElement('button');
    const rotateButton = document.createElement('button');

    gameButton.classList.add('game-start-reset');
    rotateButton.classList.add('rotate');

    gameButton.innerText = 'Start Game!';
    rotateButton.innerText = 'Rotate';

    const shipsDiv = createShipsContainer();

    setupShipSizeVariability(shipsDiv);
    setupShipHoverOverPlayerBoard(playerBoard);
    setupClickingToPlaceShip(playerBoard);
    setupShipRotationButton(rotateButton);
    setupGameButton(gameButton);

    gameArea.classList.add('game-area');

    gameArea.append(shipsDiv, playerBoard, opponentBoard);
    main.append(gameArea, gameButton, rotateButton);
    return main;
};

const createBoard = (id) => {
    const board = document.createElement('div');
    board.setAttribute('id', id);
    board.classList.add('board');

    for (let i = 0; i < 10; i++) {
        let row = document.createElement('div');
        for (let j = 0; j < 10; j++) {
            let d = document.createElement('div');
            d.classList.add('tile');
            d.setAttribute('x', j);
            d.setAttribute('y', i);
            row.append(d);
        }
        board.append(row);
    }

    return board;
};

const createShipsContainer = () => {
    const shipsDiv = document.createElement('div');
    shipsDiv.classList.add('ships-container');

    const createShip = createShipFunc();

    const ship1 = createShip(5);
    const ship2 = createShip(4);
    const ship3 = createShip(3);
    const ship4 = createShip(3);
    const ship5 = createShip(2);

    shipsDiv.append(ship1, ship2, ship3, ship4, ship5);
    return shipsDiv;
};

const createShipFunc = () => {
    let id = 1;

    return (length) => {
        const ship = document.createElement('div');

        ship.setAttribute('id', `ship-${id++}`);
        ship.setAttribute('length', `${length}`);

        return ship;
    };
};

const createFooter = () => {
    const footer = document.createElement('footer');

    const credits = document.createElement('span');
    credits.innerHTML =
        '<i class="fa-brands fa-github"></i> Made by <a href="https://github.com/Meeran-Tofiq">Meeran Tofiq</a>';

    footer.append(credits);
    return footer;
};

export { loadInitialPage };
