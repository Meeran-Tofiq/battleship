const updateBoardWithAttack = (board, p) => {
    let row = Array.from(board.querySelectorAll('.row'));
    let cell = row[p[0]].querySelector(`[x="${p[1]}"]`);
    cell.classList.add('hit');
};

export { updateBoardWithAttack };
