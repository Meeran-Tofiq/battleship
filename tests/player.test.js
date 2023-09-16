import { gameBoardFactory } from '../src/gameboard';

describe("player's turn", () => {
    let player;
    beforeEach(() => (player = playerFactory(true)));

    it("returns true when it is the player's turn", () => {
        expect(player.getTurn()).toBe(true);
    });

    it("returns false when it is the player's turn", () => {
        player.setEnemy(gameBoardFactory());
        player.attack([1, 1]);
        expect(player.getTurn()).toBe(false);
    });
});

describe('player attacks', () => {
    let player;
    beforeEach(() => (player = playerFactory(true, gameBoardFactory())));

    it("returns false when you attack a spot that's aleady been shot", () => {
        player.attack([9, 9]);
        expect(player.attack([9, 9])).toBe(false);
    });

    it('returns true when you attack an empty spot', () => {
        expect(player.attack([9, 9])).toBe(false);
    });
});
