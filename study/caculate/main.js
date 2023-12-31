let numOne = '';
let numTwo = '';
let operator = '';
const $result = document.querySelector('#result');
const $operator = document.querySelector('#operator');
const $ = (selector) => document.querySelector(selector);

const clickNum = (number) => () => {
    if (!operator) {
        numOne += number;
        $result.value += number;
        return;
    }
    if (!numTwo) {
        $result.value = '';
    }
    numTwo += number;
    $result.value += number;
};
const clickOperator = (op) => () => {
    if (numTwo) {
        switch (operator) {
            case '+':
                $result.value = parseInt(numOne) + parseInt(numTwo);
                break;
            case '-':
                $result.value = numOne - numTwo;
                break;
            case '*':
                $result.value = numOne * numTwo;
                break;
            case '/':
                $result.value = numOne / numTwo;
                break;
            default:
                break;
        }
        numOne = $result.value;
        numTwo = '';
    }
    if (numOne) {
        operator = op;
        $operator.value = op;
    } else {
        alert('숫자를 먼저 입력하세요');
    }
};
const clickCalculate = () => {
    // switch => if/else if
    // if (operator) {
    //     if (operator === '+') {
    //         $result.value = parseInt(numOne) + parseInt(numTwo);
    //     } else if (operator === '-') {
    //         $result.value = numOne - numTwo;
    //     } else if (operator === '/') {
    //         $result.value = numOne / numTwo;
    //     } else if (operator === '*') {
    //         $result.value = numOne * numTwo;
    //     } else {
    //         return;
    //     }
    // }
    if (numTwo) {
        switch (operator) {
            case '+':
                $result.value = parseInt(numOne) + parseInt(numTwo);
                break;
            case '-':
                $result.value = numOne - numTwo;
                break;
            case '*':
                $result.value = numOne * numTwo;
                break;
            case '/':
                $result.value = numOne / numTwo;
                break;
            default:
                break;
        }
        $operator.value = '';
        numOne = $result.value;
        operator = '';
        numTwo = '';
    } else {
        alert('숫자를 먼저 입력하세요.');
    }
};
for (let i = 0; i < 10; i++) {
    $(`#num-${i}`).addEventListener('click', clickNum(i));
}
$('#plus').addEventListener('click', clickOperator('+'));
$('#minus').addEventListener('click', clickOperator('-'));
$('#divide').addEventListener('click', clickOperator('/'));
$('#multiply').addEventListener('click', clickOperator('*'));
$('#calculate').addEventListener('click', clickCalculate);
$('#clear').addEventListener('click', () => {
    numOne = '';
    numTwo = '';
    operator = '';
    $result.value = '';
    $operator.value = '';
});
