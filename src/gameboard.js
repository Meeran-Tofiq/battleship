import { shipFactory } from './ship';

const gameBoardFactory = () => {
    let board = Array.from({ length: 10 }, () => new Array(10));

    const placeShip = (p1, p2) => {
        if (p1[0] > 10 || p1[1] > 10 || p2[0] > 10 || p2[1] > 10) return false;

        let vert = p1[1] !== p2[1];
        let len, xArr, yArr;

        if (vert) {
            len = p2[1] - p1[1] + 1;
            xArr = Array.from({ length: len }, () => p1[0]);
            yArr = Array.from({ length: len }, (e, i) => p1[1] + i);
        } else {
            len = p2[0] - p1[0] + 1;
            xArr = Array.from({ length: len }, (e, i) => p1[0] + i);
            yArr = Array.from({ length: len }, () => p1[1]);
        }

        for (let ind = 0; ind < xArr.length; ind++) {
            const x = xArr[ind];
            const y = yArr[ind];
            if (board[x][y]) return false;
        }

        let ship = shipFactory();

        for (let ind = 0; ind < xArr.length; ind++) {
            const x = xArr[ind];
            const y = yArr[ind];
            board[x][y] = ship;
        }
        return true;
    };

    return {
        placeShip,
    };
};

export { gameBoardFactory };
