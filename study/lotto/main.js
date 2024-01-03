const $ = (selector) => document.querySelector(selector);

const generateNum = () => {
    return Array(45)
        .fill()
        .map((el, i) => {
            return i + 1;
        });
};

const shuffleArr = (arr) => {
    const shuffle = [];
    while (arr.length > 0) {
        const index = Math.floor(Math.random() * arr.length);
        const spliceIndex = arr.splice(index, 1);
        shuffle.push(spliceIndex[0]);
    }
    return shuffle;
};
const setTimeShow = (selector, index, delay, i) => {
    setTimeout(() => {
        const temp = `<div class="ball" data-id="${i}">${index}</div>`;
        selector.insertAdjacentHTML('beforeend', temp);
        colorize(index, i);
    }, delay);
};

const showNumbers = (numbers) => () => {
    const selectNum = numbers.slice(0, 7);
    const bonus = selectNum[selectNum.length - 1];
    for (let i = 0; i < selectNum.length - 1; i++) {
        setTimeShow($('#result'), selectNum[i], (i + 1) * 1000, i + 1);
    }
    setTimeShow($('#bonus'), bonus, 7000, 7);
};

let numbers = generateNum();
let shuffleNumbers = shuffleArr(numbers);

$('button').addEventListener('click', showNumbers(shuffleNumbers));

function colorize(number, index) {
    if (number < 10) {
        document.querySelectorAll('.ball')[index - 1].style.backgroundColor = 'red';
        document.querySelectorAll('.ball')[index - 1].style.color = 'white';
    } else if (number < 20) {
        document.querySelectorAll('.ball')[index - 1].style.backgroundColor = 'orange';
    } else if (number < 30) {
        document.querySelectorAll('.ball')[index - 1].style.backgroundColor = 'green';
    } else if (number < 40) {
        document.querySelectorAll('.ball')[index - 1].style.backgroundColor = 'yellow';
    } else {
        document.querySelectorAll('.ball')[index - 1].style.backgroundColor = 'black';
        document.querySelectorAll('.ball')[index - 1].style.color = 'white';
    }
}
