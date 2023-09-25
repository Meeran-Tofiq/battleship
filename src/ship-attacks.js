const updateBoardWithAttack = (board, p, hit) => {
    let className = hit ? 'hit' : 'miss';
    let row = Array.from(board.querySelectorAll('.row'));
    let cell = row[p[0]].querySelector(`[y="${p[1]}"]`);
    cell.classList.add(className);
};

export { updateBoardWithAttack };
