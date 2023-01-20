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
board.setAttribute('class', 'board');
// board.style.backgroundColor = '#ADE792';
// board.style.display = 'grid';
// board.style.gridTemplateColumns = 'repeat(8, 30px';
// board.style.gridTemplateRows = 'repeat(8, 30px';
// board.style.gap = '2px';
// board.style.width = 'fit-content';
// board.style.padding = '5px'

document.body.appendChild(board);



for (let i = 0; i < 64; i++) {
    const grid = document.createElement('div');
    // grid.style.border = 'solid';
    // grid.style.height = '30px';
    // grid.style.width = '30px';
    grid.setAttribute('id', 'grid-' + i);
    grid.setAttribute('class', 'grid');
    board.appendChild(grid);

    grid.addEventListener('click', (() => {

        if (!grid.hasChildNodes()) {
            const piece = document.createElement('div');
            // piece.style.height = '20px';
            // piece.style.width = '20px';
            // piece.style.borderRadius = '50%';
            // piece.style.border = 'solid ' + GAME_TURN;
            // piece.style.margin = '2px';
            piece.setAttribute('id', 'piece-' + i);
            piece.setAttribute('class', 'piece ' + GAME_TURN);
            // piece.style.backgroundColor = GAME_TURN;
            GAME[i].color = GAME_TURN;
            grid.appendChild(piece);

            if (GAME_TURN === 'white') {
                GAME_TURN = 'black';
            } else if (GAME_TURN === 'black') {
                GAME_TURN = 'white';
            }

            let gridIndex = Number(grid.getAttribute('id').substring(5));
            let oneBelow = gridIndex + 8;
            let oneAbove = gridIndex - 8;
            let oneLeft = gridIndex - 1;
            let oneRight = gridIndex + 1;
            let oneLeftAbove = gridIndex - 9;
            let oneRightAbove = gridIndex - 7;
            let oneLeftBelow = gridIndex + 7;
            let oneRightBelow = gridIndex + 9;

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

            while (GAME[oneAbove].color !== 'blank' && GAME[oneAbove].color !== GAME[gridIndex].color && !GAME[gridIndex].edge.includes('top') && !GAME[oneAbove].edge.includes('top')) {
                oneAbove -= 8;
            }

            if (GAME[oneAbove].color === GAME[gridIndex].color) {
                for (i = oneAbove; i !== gridIndex; i += 8) {
                    GAME[i].color = GAME[gridIndex].color;
                    let pieceToChange = document.getElementById('piece-' + GAME[i].gridNum);
                    pieceToChange.style.backgroundColor = GAME[gridIndex].color;
                    pieceToChange.style.border = 'solid ' + GAME[gridIndex].color;
                }
            }

            while (GAME[oneLeft].color !== 'blank' && GAME[oneLeft].color !== GAME[gridIndex].color && !GAME[gridIndex].edge.includes('left') && !GAME[oneLeft].edge.includes('left')) {
                oneLeft -= 1;
            }

            if (GAME[oneLeft].color === GAME[gridIndex].color) {
                for (i = oneLeft; i !== gridIndex; i += 1) {
                    GAME[i].color = GAME[gridIndex].color;
                    let pieceToChange = document.getElementById('piece-' + GAME[i].gridNum);
                    pieceToChange.style.backgroundColor = GAME[gridIndex].color;
                    pieceToChange.style.border = 'solid ' + GAME[gridIndex].color;
                }
            }

            while (GAME[oneRight].color !== 'blank' && GAME[oneRight].color !== GAME[gridIndex].color && !GAME[gridIndex].edge.includes('right') && !GAME[oneRight].edge.includes('right')) {
                oneRight += 1;
            }

            if (GAME[oneRight].color === GAME[gridIndex].color) {
                for (i = oneRight; i !== gridIndex; i -= 1) {
                    GAME[i].color = GAME[gridIndex].color;
                    let pieceToChange = document.getElementById('piece-' + GAME[i].gridNum);
                    pieceToChange.style.backgroundColor = GAME[gridIndex].color;
                    pieceToChange.style.border = 'solid ' + GAME[gridIndex].color;
                }
            }

            while (GAME[oneLeftAbove].color !== 'blank' && GAME[oneLeftAbove].color !== GAME[gridIndex].color && !GAME[gridIndex].edge.includes('left') && !GAME[oneLeftAbove].edge.includes('left')) {
                oneLeftAbove -= 9;
            }

            if (GAME[oneLeftAbove].color === GAME[gridIndex].color) {
                for (i = oneLeftAbove; i !== gridIndex; i += 9) {
                    GAME[i].color = GAME[gridIndex].color;
                    let pieceToChange = document.getElementById('piece-' + GAME[i].gridNum);
                    pieceToChange.style.backgroundColor = GAME[gridIndex].color;
                    pieceToChange.style.border = 'solid ' + GAME[gridIndex].color;
                }
            }

            while (GAME[oneRightAbove].color !== 'blank' && GAME[oneRightAbove].color !== GAME[gridIndex].color && !GAME[gridIndex].edge.includes('right') && !GAME[oneRightAbove].edge.includes('right')) {
                oneRightAbove -= 7;
            }

            if (GAME[oneRightAbove].color === GAME[gridIndex].color) {
                for (i = oneRightAbove; i !== gridIndex; i += 7) {
                    GAME[i].color = GAME[gridIndex].color;
                    let pieceToChange = document.getElementById('piece-' + GAME[i].gridNum);
                    pieceToChange.style.backgroundColor = GAME[gridIndex].color;
                    pieceToChange.style.border = 'solid ' + GAME[gridIndex].color;
                }
            }

            while (GAME[oneLeftBelow].color !== 'blank' && GAME[oneLeftBelow].color !== GAME[gridIndex].color && !GAME[gridIndex].edge.includes('bottom') && !GAME[oneBelow].edge.includes('bottom')) {
                oneLeftBelow += 7;
            }

            if (GAME[oneLeftBelow].color === GAME[gridIndex].color) {
                for (i = oneLeftBelow; i !== gridIndex; i -= 7) {
                    GAME[i].color = GAME[gridIndex].color;
                    let pieceToChange = document.getElementById('piece-' + GAME[i].gridNum);
                    pieceToChange.style.backgroundColor = GAME[gridIndex].color;
                    pieceToChange.style.border = 'solid ' + GAME[gridIndex].color;
                }
            }

            while (GAME[oneRightBelow].color !== 'blank' && GAME[oneRightBelow].color !== GAME[gridIndex].color && !GAME[gridIndex].edge.includes('bottom') && !GAME[oneBelow].edge.includes('bottom')) {
                oneRightBelow += 9;
            }

            if (GAME[oneRightBelow].color === GAME[gridIndex].color) {
                for (i = oneRightBelow; i !== gridIndex; i -= 9) {
                    GAME[i].color = GAME[gridIndex].color;
                    let pieceToChange = document.getElementById('piece-' + GAME[i].gridNum);
                    pieceToChange.style.backgroundColor = GAME[gridIndex].color;
                    pieceToChange.style.border = 'solid ' + GAME[gridIndex].color;
                }
            }
        }
    }))
}

let initialPieces = [[27, 'white'], [28, 'black'], [35, 'black'], [36, 'white']];
initialPieces.forEach((initial) => {
    const piece = document.createElement('div');
    piece.setAttribute('id', initial[0]);
    piece.setAttribute('class', 'piece ' + initial[1]);
    document.getElementById('grid-' + initial[0]).appendChild(piece);
})


// const whitePiece1 = document.createElement('div');
// whitePiece1.setAttribute('id', 'piece-' + 27);
// whitePiece1.setAttribute('class', 'piece white');
// document.getElementById('grid-27').appendChild(whitePiece1);