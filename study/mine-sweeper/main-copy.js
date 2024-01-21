const $form = document.querySelector('#form');
const $timer = document.querySelector('#timer');
const $tbody = document.querySelector('#table tbody');
const $result = document.querySelector('#result');
const CODE = {
    NORMAL: -1,
    QUESTION: -2,
    FLAG: -3,
    QUESTION_MINE: -4,
    FLAG_MINE: -5,
    MINE: -6,
    OPENED: 0,
};
let row;
let cell;
let mine;
let data = new Array();
function onSubmit(event) {
    $tbody.innerHTML = '';
    data = new Array();
    event.preventDefault();
    row = parseInt(event.target['row'].value);
    cell = parseInt(event.target['cell'].value);
    mine = parseInt(event.target['mine'].value);
    createTable();
}
function createTable() {
    const candidate = Array(row * cell)
        .fill()
        .map((a, i) => {
            return i;
        });
    let shuffle = new Array();
    while (candidate.length > row * cell - mine) {
        const randomNum = candidate.splice(Math.floor(Math.random() * candidate.length), 1);
        shuffle.push(randomNum[0]);
    }
    for (let i = 0; i < row; i++) {
        const rowIndex = [];
        for (let j = 0; j < cell; j++) {
            rowIndex.push(CODE.NORMAL);
        }
        data.push(rowIndex);
    }
    shuffle.forEach((a, i) => {
        const front = Math.floor(a / cell);
        const back = a % cell;
        data[front][back] = CODE.MINE;
    });
    console.log(data);
    data.forEach((a, i) => {
        const $tr = document.createElement('tr');
        a.forEach((d, i) => {
            const $td = document.createElement('td');
            if (d === CODE.MINE) {
                // $td.textContent = 'X'; // 지뢰 위치 확인 용도
            }
            $tr.append($td);
        });
        $tbody.append($tr);
        $tbody.addEventListener('contextmenu', onRightClick);
        $tbody.addEventListener('click', onLeftClick);
    });
}
function onRightClick(event) {
    event.preventDefault();
    const target = event.target;
    const row = event.target.parentNode.rowIndex;
    const cell = event.target.cellIndex;
    const cellData = data[row][cell];
    if (cellData === CODE.NORMAL) {
        data[row][cell] = CODE.QUESTION;
        target.className = 'question';
        target.textContent = '?';
    } else if (cellData === CODE.QUESTION) {
        data[row][cell] = CODE.FLAG;
        target.className = 'flag';
        target.textContent = '!';
    } else if (cellData === CODE.FLAG) {
        data[row][cell] = CODE.NORMAL;
        target.className = '';
        target.textContent = '';
    } else if (cellData === CODE.MINE) {
        data[row][cell] = CODE.QUESTION_MINE;
        target.className = 'question';
        target.textContent = '?';
    } else if (cellData === CODE.QUESTION_MINE) {
        data[row][cell] = CODE.FLAG_MINE;
        target.className = 'flag';
        target.textContent = '!';
    } else if (cellData === CODE.FLAG_MINE) {
        console.log(1);
        data[row][cell] = CODE.MINE;
        target.className = '';
        target.textContent = '';
    }
}
function onLeftClick(event) {
    event.preventDefault();
    const target = event.target;
    const row = event.target.parentNode.rowIndex;
    const cell = event.target.cellIndex;
    console.log(row, cell);
    const cellData = data[row][cell];
    if (cellData === CODE.NORMAL) {
        target.className = 'opened';
    }
    if (cellData === CODE.MINE) {
        showMines();
        target.textContent = '펑';
        $tbody.removeEventListener('click', onLeftClick);
        $tbody.removeEventListener('contextmenu', onRightClick);
    }
}
function showMines() {
    const mine = [CODE.MINE, CODE.FLAG_MINE, CODE.QUESTION_MINE];
    data.forEach((row, rowIndex) => {
        row.forEach((cell, cellIndex) => {
            if (mine.includes(cell)) {
                $tbody.children[rowIndex].children[cellIndex].textContent = 'X';
            }
        });
    });
}

$form.addEventListener('submit', onSubmit);
