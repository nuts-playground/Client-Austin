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
const setTimeShow = (selector, index, delay) => {
    setTimeout(() => {
        const temp = `<div class="ball">${index}</div>`;
        selector.insertAdjacentHTML('beforeend', temp);
    }, delay);
};

const showNumbers = (numbers) => () => {
    const selectNum = numbers.slice(0, 7);
    const bonus = selectNum[selectNum.length - 1];
    for (let i = 0; i < selectNum.length - 1; i++) {
        setTimeShow($('#result'), selectNum[i], (i + 1) * 1000);
    }
    setTimeShow($('#bonus'), selectNum[selectNum.length - 1], 7000);
};

let numbers = generateNum();
let shuffleNumbers = shuffleArr(numbers);

$('button').addEventListener('click', showNumbers(shuffleNumbers));
