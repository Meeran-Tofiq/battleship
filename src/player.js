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

    return {
        attack,
        setEnemy,
        getTurn,
        board,
    };
};

export { playerFactory };
