GAME_TURN = 'white';

let GAME = [];

let TOP_EDGE = [0, 1, 2, 3, 4, 5, 6, 7];
let BOTTOM_EDGE = [56, 57, 58, 59, 60, 61, 62, 63];
let RIGHT_EDGE = [7, 15, 23, 31, 39, 47, 55, 63];
let LEFT_EDGE = [0, 8, 16, 24, 32, 40, 48, 56];

for (i = 0; i < 64; i++) {
    let edgeArray = [];
    [[TOP_EDGE, 'top'], [BOTTOM_EDGE, 'bottom'], [RIGHT_EDGE, 'right'], [LEFT_EDGE, 'left']].forEach((edge) => {
        if (edge[0].includes(i)) {
            edgeArray.push(edge[1]);
        }
    })
    let pieceObj = {
        gridNum: i,
        color: 'blank',
        edge: edgeArray
    }
    GAME.push(pieceObj);
}

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
    grid.setAttribute('id', 'grid-' + i);
    board.appendChild(grid);

    grid.addEventListener('click', (() => {

        if (!grid.hasChildNodes()) {
            const piece = document.createElement('div');
            piece.style.height = '20px';
            piece.style.width = '20px';
            piece.style.borderRadius = '50%';
            piece.style.border = 'solid ' + GAME_TURN;
            piece.style.margin = '2px';
            piece.setAttribute('id', 'piece-' + i);
            piece.style.backgroundColor = GAME_TURN;
            GAME[i].color = GAME_TURN;
            grid.appendChild(piece);

            if (GAME_TURN === 'white') {
                GAME_TURN = 'black';
            } else if (GAME_TURN === 'black') {
                GAME_TURN = 'white';
            }

            let gridIndex = Number(grid.getAttribute('id').substring(5));
            let oneBelow = gridIndex + 8;

            while (GAME[oneBelow].color !== 'blank' && GAME[oneBelow].color !== GAME[gridIndex].color && !GAME[gridIndex].edge.includes('bottom') && !GAME[oneBelow].edge.includes('bottom')) {
                oneBelow += 8;
            }

            if (GAME[oneBelow].color === GAME[gridIndex].color) {
                for (i = oneBelow; i !== gridIndex; i -= 8) {
                    GAME[i].color = GAME[gridIndex].color;
                    let pieceToChange = document.getElementById('piece-' + GAME[i].gridNum);
                    pieceToChange.style.backgroundColor = GAME[gridIndex].color;
                    pieceToChange.style.border = 'solid ' + GAME[gridIndex].color;
                }
            }
        }
    }))
}