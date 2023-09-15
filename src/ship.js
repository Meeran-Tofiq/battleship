const shipFactory = (len) => {
    const length = len;
    let hits = 0;

    const hit = () => {
        if (hits !== length) hits++;
    };

    const getHits = () => {
        return hits;
    };

    return {
        hit,
        getHits,
    };
};

export { shipFactory };
