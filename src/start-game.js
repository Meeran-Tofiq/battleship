import { ships } from './place-ships';
import { playerFactory } from './player';

const setupGameButton = (btn) => {
    btn.addEventListener('click', () => {
        startGame();
    });
};

const startGame = () => {
    let player = playerFactory(true);
    let opponent = playerFactory(false, player);
    player.setEnemy(opponent);

    ships.forEach((ship) => player.board.placeShip(ship.p1, ship.p1));
};
