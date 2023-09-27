const updateBoardWithAttack = (board, p, shipHit) => {
    let row = Array.from(board.querySelectorAll('.row'));
    let cell = row[p[1]].querySelector(`[x="${p[0]}"]`);
    cell.classList.add('hit');
    if (shipHit && !cell.classList.contains('taken'))
        cell.classList.add('taken');
};

const getPlayerAttack = (board) => {
    return new Promise((resolve, reject) => {
        board.addEventListener('click', (event) => {
            const clickedCell = event.target;
            const x = parseInt(clickedCell.getAttribute('x'));
            const y = parseInt(clickedCell.getAttribute('y'));

            if (x > 9 || x < 0 || y > 9 || y < 0 || isNaN(x) || isNaN(y))
                reject();
            resolve([x, y]);
        });
    });
};

export { updateBoardWithAttack, getPlayerAttack };
