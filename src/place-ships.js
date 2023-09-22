let length = 0;

const setupShipSizeVariability = (shipsContainer) => {
    Array.from(shipsContainer.children).forEach((ship) => {
        ship.addEventListener('click', () => {
            length = ship.getAttribute('length');
            console.log(length);
        });
    });
};

export { setupShipSizeVariability };
