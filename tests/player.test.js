import { gameBoardFactory } from '../src/gameboard';
import { playerFactory } from '../src/player';

describe("player's turn", () => {
    let player;
    beforeEach(() => (player = playerFactory(true, gameBoardFactory())));

    it("returns true when it is the player's turn", () => {
        expect(player.getTurn()).toBe(true);
    });

    it("returns false when it is not the player's turn", () => {
        player.setEnemy(gameBoardFactory());
        player.attack([1, 1]);
        expect(player.getTurn()).toBe(false);
    });
});

describe('player attacks', () => {
    let player;
    beforeEach(() => (player = playerFactory(true, gameBoardFactory())));

    it('returns true when you attack an empty spot', () => {
        expect(player.attack([9, 9])).toBe(true);
    });

    it("returns false when you attack a spot that's aleady been shot", () => {
        player.attack([9, 9]);
        expect(player.attack([9, 9])).toBe(false);
    });
});

describe('random attacks for AI', () => {
    let player;
    let board;

    beforeEach(() => {
        board = gameBoardFactory();
        player = playerFactory(true, board);
    });

    it('attacks until it hits a spot', () => {
        let copy = board.getBoard();
        player.makeRandomAttack();
        expect(copy).not.toBe(board.getBoard());
    });

    it('returns the spot it attacked', () => {
        let spot = player.makeRandomAttack();
        let validX = spot[0] < 10 && spot[0] >= 0;
        let validY = spot[1] < 10 && spot[1] >= 0;
        expect(validX && validY).toBe(true);
    });
});

describe('place random ships for A.I.', () => {
    let opponent;

    beforeEach(() => (opponent = playerFactory(false)));

    it('places 5 random ships down', () => {
        opponent.placeRandomShips();
        let ans = 0;
        opponent.board.getBoard().forEach((row) => {
            row.forEach((cell) => {
                if (cell) ans++;
            });
        });
        expect(ans).toBe(17);
    });
});
