import { shipFactory } from '../src/ship';

describe('hit', () => {
    let ship;
    beforeEach(() => (ship = shipFactory(1)));

    it('adds a hit to hits variable', () => {
        ship.hit();
        expect(ship.getHits()).toBe(1);
    });

    it("doesn't add a hit when you reach the maximum", () => {
        ship.hit();
        ship.hit();
        expect(ship.getHits()).toBe(1);
    });
});
