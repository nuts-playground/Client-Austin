const { body } = document;
const $table = document.createElement('table');
const $result = document.createElement('div');
const $button = document.createElement('button');
$button.append('다시하기');
const rows = [];
let turn = 'O';
const checkWinner = (target) => {
    const rowIndex = target.parentNode.rowIndex;
    const cellIndex = target.cellIndex;
    let hasWinner = false;
    if (
        rows[rowIndex][0].textContent === turn &&
        rows[rowIndex][1].textContent === turn &&
        rows[rowIndex][2].textContent === turn
    ) {
        hasWinner = true;
    }
    if (
        rows[0][cellIndex].textContent === turn &&
        rows[1][cellIndex].textContent === turn &&
        rows[2][cellIndex].textContent === turn
    ) {
        hasWinner = true;
    }

    if (rows[0][0].textContent === turn && rows[1][1].textContent === turn && rows[2][2].textContent === turn) {
        hasWinner = true;
    }
    if (rows[0][2].textContent === turn && rows[1][1].textContent === turn && rows[2][0].textContent === turn) {
        hasWinner = true;
    }
    return hasWinner;
};
const reset = () => {
    rows.flat().forEach((a, i) => {
        document.querySelectorAll('td')[i].textContent = '';
    });
    turn = 'O';
};

const checkWinnerAndDraw = (target) => {
    const hasWinner = checkWinner(target);
    if (hasWinner) {
        $result.textContent = `${turn}님이 승리!`;
        $table.removeEventListener('click', callback);
        return;
    }
    const draw = rows.flat().every((cell) => cell.textContent);
    if (draw) {
        $result.textContent = `무승부`;
        return;
    }
    turn = turn === 'X' ? 'O' : 'X';
};

let clickable = true;
const callback = (event) => {
    if (!clickable) {
        return;
    }
    if (event.target.textContent !== '') {
        return;
    }

    event.target.textContent = turn;
    checkWinnerAndDraw(event.target);
    if (turn === 'X') {
        const emptyCells = rows.flat().filter((v) => !v.textContent);
        const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        clickable = false;
        setTimeout(() => {
            randomCell.textContent = 'X';
            checkWinnerAndDraw(randomCell);
            clickable = true;
        }, 1000);
    }
};

for (let i = 1; i <= 3; i++) {
    const $tr = document.createElement('tr');
    const cells = [];
    for (let j = 1; j <= 3; j++) {
        const $td = document.createElement('td');
        cells.push($td);
        $tr.append($td);
    }
    rows.push(cells);
    $table.append($tr);
}
$table.addEventListener('click', callback);
body.append($table);
body.append($result);
body.append($button);
$button.addEventListener('click', reset);

// const { body } = document;
// const $table = document.createElement('table');
// const $result = document.createElement('p');
// const $button = document.createElement('button');
// const rows = [];
// let turn = 'O'; // 첫 번째는 무조건 O의 차례

// const init = (e) => {
//     if (!e.target.textContent) {
//         e.target.textContent = turn;
//     }
// };
// for (let i = 0; i < 3; i++) {
//     let $tr = document.createElement('tr');
//     let cells = [];
//     for (let i = 0; i < 3; i++) {
//         let $td = document.createElement('td');
//         $tr.append($td);
//         cells.push($td);
//     }
//     rows.push(cells);
//     $table.append($tr);
// }
// $table.addEventListener('click', init);
// body.append($table);
