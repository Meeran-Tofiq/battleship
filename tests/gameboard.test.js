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
