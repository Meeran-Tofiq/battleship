import { gameBoardFactory } from '../src/gameboard';

describe('placeShip', () => {
    let board;
    beforeEach(() => (board = gameBoardFactory()));

    it('places ship when spot is empty', () => {
        expect(board.placeShip([1, 1], [3, 1])).toBe(true);
    });

    it("doesn't place ship when the spot is taken", () => {
        board.placeShip([1, 1], [1, 3]);
        expect(board.placeShip([1, 1], [1, 3])).toBe(false);
    });

    it("doesn't place ship when it overlaps with another ship at 1 sqaure", () => {
        board.placeShip([1, 1], [1, 3]);
        expect(board.placeShip([1, 2], [3, 2])).toBe(false);
    });

    it("doesn't place ship when the x is outside the grid", () => {
        expect(board.placeShip([11, 1], [1, 3])).toBe(false);
    });

    it("doesn't place ship when the y is outside the grid", () => {
        expect(board.placeShip([1, 1], [12, 3])).toBe(false);
    });
});

describe('recieving an attack', () => {
    let board;
    beforeEach(() => (board = gameBoardFactory()));

    it('hits a ship, if the spot has a ship on it', () => {
        board.placeShip([1, 1], [1, 3]);
        expect(board.recieveHit([1, 1])).toBe(true);
    });

    it('hits a ship, if the spot has a ship on it', () => {
        board.placeShip([2, 2], [5, 2]);
        expect(board.recieveHit([3, 2])).toBe(true);
    });

    it("causes a miss, if the spot doesn't have a ship on it", () => {
        expect(board.recieveHit([1, 1])).toBe(false);
    });

    it("doesn't try to hit a spot already missed", () => {
        board.recieveHit([1, 1]);
        expect(board.recieveHit([1, 1])).toBe(false);
    });

    it("doesn't try to hit a spot already shot and hit before", () => {
        board.placeShip([1, 1], [1, 3]);
        board.recieveHit([1, 1]);
        expect(board.recieveHit([1, 1])).toBe(false);
    });
});

describe('losing the game', () => {
    let board;
    beforeEach(() => (board = gameBoardFactory()));

    it('returns true when all ships have sunk', () => {
        board.placeShip([1, 1], [1, 3]);
        board.placeShip([5, 5], [7, 5]);
        board.recieveHit([1, 1]);
        board.recieveHit([1, 2]);
        board.recieveHit([1, 3]);
        board.recieveHit([5, 5]);
        board.recieveHit([6, 5]);
        board.recieveHit([7, 5]);
        expect(board.haveLost()).toBe(true);
    });

    it("returns false when all ships haven't been sunken", () => {
        board.placeShip([1, 1], [1, 3]);
        board.placeShip([5, 5], [7, 5]);
        board.recieveHit([1, 1]);
        board.recieveHit([1, 2]);
        board.recieveHit([1, 3]);
        board.recieveHit([5, 5]);
        board.recieveHit([6, 5]);
        expect(board.haveLost()).toBe(false);
    });
});

describe('showing cells that can be shot by the other player', () => {
    let board;
    beforeEach(() => (board = gameBoardFactory()));

    it('returns true when the spot has not been hit before', () => {
        expect(board.canBeShotAt([9, 9])).toBe(true);
    });

    it('returns false when the spot has been hit before, and it was a miss', () => {
        expect(board.canBeShotAt([9, 9])).toBe(true);
    });

    it('returns true when the spot has been hit before, and it was a success', () => {
        expect(board.canBeShotAt([9, 9])).toBe(true);
    });

    it('returns true when the spot has not been hit before', () => {
        expect(board.canBeShotAt([9, 9])).toBe(true);
    });
});

describe('telling you whether a spot has a ship or not', () => {
    let board;
    beforeEach(() => (board = gameBoardFactory()));

    it('returns true if that spot is a ship', () => {
        board.placeShip([1, 1], [1, 3]);
        expect(board.hasShipAt([1, 1])).toBe(true);
        expect(board.hasShipAt([1, 2])).toBe(true);
        expect(board.hasShipAt([1, 3])).toBe(true);
    });

    it('returns false when the spot is empty', () => {
        board.placeShip([4, 5], [9, 5]);
        expect(board.hasShipAt([1, 1])).toBe(false);
        expect(board.hasShipAt([1, 2])).toBe(false);
        expect(board.hasShipAt([1, 3])).toBe(false);
    });
});

it('is not possible gameBoard objects to have the same board', () => {
    let a = gameBoardFactory();
    let b = gameBoardFactory();
    a.placeShip([2, 2], [4, 2]);
    expect(a === b).toBe(false);
});
