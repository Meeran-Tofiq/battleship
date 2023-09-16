describe('placeShip', () => {
    let board;
    beforeEach(() => (board = gameBoardFactory()));
    it('places ship when spot is empty', () => {
        expect(board.placeShip([1, 1], [3, 1])).toBe(true);
    });

    it('places ship in the correct spot', () => {
        board.placeShip([1, 1], [1, 3]);
        let arr = [];
        for (let ind = 0; ind < 3; ind++) {
            arr.push(board.isEmptyAt([1, ind]));
        }
        expect(arr).toBe([false, false, false]);
    });

    it("doesn't place ship when the spot is taken", () => {
        board.placeShip([1, 1], [1, 3]);
        expect(board.placeShip([1, 1], [1, 3])).toBe(false);
    });
});
