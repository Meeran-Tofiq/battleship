import { shipFactory } from './ship';

const gameBoardFactory = () => {
    let board = Array.from({ length: 10 }, () => new Array(10));
    let ships = [];

    const placeShip = (p1, p2) => {
        if (p1[0] > 9 || p1[1] > 9 || p2[0] > 9 || p2[1] > 9) return false;

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

        let ship = shipFactory(len);
        ships.push(ship);

        for (let ind = 0; ind < xArr.length; ind++) {
            const x = xArr[ind];
            const y = yArr[ind];
            board[x][y] = ship;
        }
        return true;
    };

    const recieveHit = (p) => {
        let des = board[p[0]][p[1]];
        if (des && des !== -1 && des !== 0) {
            des.hit();
            board[p[0]][p[1]] = 0;
            return true;
        } else {
            if (des === undefined) board[p[0]][p[1]] = -1;
            return false;
        }
    };

    const haveLost = () => {
        for (let ind = 0; ind < ships.length; ind++) {
            const ship = ships[ind];
            if (!ship.isSunk()) return false;
        }
        return true;
    };

    const canBeShotAt = (p) => {
        if (p[0] > 9 || p[1] > 9) return false;
        let point = board[p[0]][p[1]];
        return point !== -1 && point !== 0;
    };

    const getBoard = () => {
        return [...board];
    };

    const hasShipAt = (p) => {
        return !!board[p[0]][p[1]];
    };

    const print = () => {
        board.forEach((row) => {
            let str = '';
            row.forEach((cell) => {
                if (cell) str += 'S, ';
                else str += '-, ';
            });
            console.log(str);
        });
    };

    return {
        placeShip,
        recieveHit,
        haveLost,
        canBeShotAt,
        getBoard,
        print,
        hasShipAt,
    };
};

export { gameBoardFactory };
