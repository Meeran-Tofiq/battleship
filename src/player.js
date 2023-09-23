import { gameBoardFactory } from './gameboard';

const playerFactory = (t, opp) => {
    let turn = t;
    let board = gameBoardFactory();
    let enemyBoard = opp;

    const attack = (p) => {
        if (!turn) return false;
        if (enemyBoard.canBeShotAt(p)) {
            turn = false;
            enemyBoard.recieveHit(p);
            return true;
        } else return false;
    };

    const getTurn = () => {
        return turn;
    };

    const setEnemy = (_enemy) => {
        enemyBoard = _enemy;
    };

    const makeRandomAttack = () => {
        let x, y;
        let shot = false;

        while (!shot) {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
            shot = attack([x, y]);
        }
    };

    const placeRandomShips = () => {
        [4, 3, 2, 2, 1].forEach((len) => {
            let p1 = [
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
            ];
            let p2;
            let done = false;
            let vertical = Math.round(Math.random());

            if (vertical) {
                while (!done) {
                    p1 = [
                        Math.floor(Math.random() * 10),
                        Math.floor(Math.random() * 10),
                    ];
                    p2 = [p1[0], p1[1] + len];
                    done = board.placeShip(p1, p2);
                }
            } else {
                while (!done) {
                    p1 = [
                        Math.floor(Math.random() * 10),
                        Math.floor(Math.random() * 10),
                    ];
                    p2 = [p1[0] + len, p1[1]];
                    done = board.placeShip(p1, p2);
                }
            }
        });
    };

    return {
        attack,
        setEnemy,
        getTurn,
        makeRandomAttack,
        placeRandomShips,
        board,
    };
};

export { playerFactory };
