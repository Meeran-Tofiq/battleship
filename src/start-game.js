import { placedShips } from './place-ships';
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

    placedShips.forEach((ship) => player.board.placeShip(ship.p1, ship.p2));
    opponent.placeRandomShips();

    console.log(opponent.board.print());
};

export { setupGameButton };
