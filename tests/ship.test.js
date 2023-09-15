import { shipFactory } from '../src/ship';

let ship;
beforeEach(() => (ship = shipFactory(1)));

describe('hit', () => {
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

describe('isSunk', () => {
    it('shows sunk when sunk', () => {
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    });

    it("doesn't show sunk when unsunk", () => {
        expect(ship.isSunk()).toBe(false);
    });
});
