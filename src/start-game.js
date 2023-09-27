import { placedShips } from './place-ships';
import { playerFactory } from './player';
import { getPlayerAttack, updateBoardWithAttack } from './ship-attacks';

const setupGameButton = (btn, callback) => {
    let start = false;
    btn.addEventListener('click', () => {
        if (!start) {
            startGame();
        } else {
            callback();
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

export { setupGameButton };
