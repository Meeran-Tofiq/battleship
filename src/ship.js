const shipFactory = (len) => {
    const length = len;
    let hits = 0;

    const hit = () => {
        if (hits !== length) hits++;
    };

    const getHits = () => {
        return hits;
    };

    const isSunk = () => {
        return hits === length;
    };

    return {
        hit,
        getHits,
        isSunk,
    };
};

export { shipFactory };
