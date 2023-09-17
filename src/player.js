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

    return {
        attack,
        setEnemy,
        getTurn,
        makeRandomAttack,
        board,
    };
};

export { playerFactory };
