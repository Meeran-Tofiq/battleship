const loadInitialPage = () => {
    const content = document.createElement('div');
    content.classList.add('content');

    // header
    const header = createHeader();

    // main game area
    const main = createMainGameArea();

    // footer
    const footer = createFooter();

    console.log('hello');
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
    const playerBoard = document.createElement('div');
    const opponentBoard = document.createElement('div');
    const gameButton = document.createElement('button');
    const rotateButton = document.createElement('button');

    const shipsDiv = createShipsContainer();

    gameArea.append(
        playerBoard,
        opponentBoard,
        gameButton,
        rotateButton,
        shipsDiv
    );
    main.append(gameArea);
    return main;
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

        ship.addEventListener('click', () => {});

        ship.setAttribute('id', `ship-${id++}`);

        return ship;
    };
};

const createFooter = () => {
    const footer = document.createElement('footer');

    const credits = document.createElement('span');
    credits.innerHTML =
        '<i class="fa-brands fa-github"></a> Made by <a href="https://github.com/Meeran-Tofiq">Meeran Tofiq';

    footer.append(credits);
    return footer;
};

export { loadInitialPage };
