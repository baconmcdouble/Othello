const board = document.createElement('div');
board.style.backgroundColor = '#ADE792';
board.style.display = 'grid';
board.style.gridTemplateColumns = 'repeat(8, 30px';
board.style.gridTemplateRows = 'repeat(8, 30px';
board.style.gap = '2px';
board.style.width = 'fit-content';
board.style.padding = '5px'

document.body.appendChild(board);

for (let i = 0; i < 64; i++) {
    const grid = document.createElement('div');
    grid.style.border = 'solid';
    grid.style.height = '30px';
    grid.style.width = '30px';
    grid.setAttribute('id', 'grid' + i);
    board.appendChild(grid);

    grid.addEventListener('click', (() => {
        const piece = document.createElement('div');
        piece.style.height = '20px';
        piece.style.width = '20px';
        piece.style.borderRadius = '50%';
        piece.style.border = 'solid';
        piece.style.margin = '2px';

        grid.appendChild(piece);
    }))
}