const board = document.createElement('div');
board.style.backgroundColor = '#ADE792';
board.style.display = 'grid';
board.style.gridTemplateColumns = 'repeat(8, 30px';
board.style.gridTemplateRows = 'repeat(8, 30px';
board.style.gap = '1px';
board.style.width = 'fit-content';

document.body.appendChild(board);

for (let i = 0; i < 64; i++) {
    const grid = document.createElement('div');
    grid.style.border = 'solid';
    grid.style.height = '30px';
    grid.style.width = '30px';
    grid.setAttribute('id', 'grid' + i);
    board.appendChild(grid);
}