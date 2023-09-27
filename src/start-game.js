import { placedShips, resetPlacedShips } from './place-ships';
import { playerFactory } from './player';
import { getPlayerAttack, updateBoardWithAttack } from './ship-attacks';

const setupGameButton = (btn) => {
    let start = false;
    btn.addEventListener('click', () => {
        let ships = [...document.querySelector('.ships-container').children];
        if (
            ships.filter((ship) => ship.classList.contains('placed')).length !==
            5
        )
            return;
        if (!start) {
            startGame();
            btn.innerText = 'Reset Board!';
        } else {
            restart();
            btn.innerText = 'Start Game!';
        }
        start = !start;
    });
};

const startGame = async () => {
    let player = playerFactory(false);
    let opponent = playerFactory(true, player.board);
    player.setEnemy(opponent.board);

    placedShips.forEach((ship) => player.board.placeShip(ship.p1, ship.p2));
    opponent.placeRandomShips();

    let playerBoard = document.querySelector('#player');
    let opponetBoard = document.querySelector('#opponent');

    let point;
    while (true) {
        if (player.getTurn()) {
            try {
                point = await getPlayerAttack(opponetBoard);
            } catch (e) {
                console.log(e);
            }

            let hitShip = opponent.board.hasShipAt(point);
            let attack = player.attack(point);
            updateBoardWithAttack(opponetBoard, point, hitShip);

            if (attack) opponent.switchTurn();
        } else if (opponent.getTurn()) {
            point = opponent.makeRandomAttack();
            let hitShip = player.board.hasShipAt(point);
            updateBoardWithAttack(playerBoard, point, hitShip);

            player.switchTurn();
        }

        if (opponent.board.haveLost()) {
            console.log('YOU WON!');
            break;
        } else if (player.board.haveLost()) {
            console.log('YOU LOST!');
            break;
        }
    }
};

const restart = () => {
    const ships = [...document.querySelector('.ships-container').children];
    ships.forEach((ship) => ship.classList.remove('placed'));

    const tiles = [...document.querySelectorAll('.tile')];
    tiles.forEach((tile) => tile.classList.remove('hit', 'taken'));

    resetPlacedShips();
};

export { setupGameButton };
