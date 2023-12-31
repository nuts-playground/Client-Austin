// const $ = (selector) => document.querySelector(selector);
// const numbers = new Array();
// const arr = new Array();
// const tries = new Array();

// for (let i = 0; i < 9; i++) {
//     numbers.push(i + 1);
// }
// for (let i = 0; i < 4; i++) {
//     const index = Math.floor(Math.random() * numbers.length);
//     arr.push(numbers[index]);
//     numbers.splice([index], 1);
// }

// $('#form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     const $value = $('input').value;
//     $('input').value = '';

//     if (!checkInput($value)) {
//     }
//     if (checkInput($value)) {
//         if (arr.join('') === $value) {
//             $('#logs').textContent = '홈런!';
//             return;
//         }
//         if (tries.length > 9) {
//             $('#logs').append(`실패 정답은 ${arr.join('')}입니다`);
//             return;
//         }
//         let out = 0;
//         let strike = 0;
//         let ball = 0;
//         for (let i = 0; i < $value.length; i++) {
//             const index = $value.indexOf(arr[i]);
//             if (index > -1) {
//                 if (arr[i] == $value[i]) {
//                     strike += 1;
//                     //for문 내에서 if문 줄이고 싶을 땐 return 대신 break
//                 } else {
//                     ball += 1;
//                 }
//             }
//         }

//         if (strike === 0 && ball === 0) {
//             out++;
//             $('#logs').append(`${$value} : 아웃`, document.createElement('br'));
//         } else {
//             $('#logs').append(`${$value} : ${strike}스트라이크 ${ball}볼`, document.createElement('br'));
//         }
//         if (out === 3) {
//             $('logs').append('패배');
//         }
//         tries.push($value);
//     }
// });

// function checkInput(input) {
//     if (input.length !== 4) {
//         return alert('4자리 숫자를 입력해주세요');
//     }
//     if (new Set(input).size !== 4) {
//         return alert('중복된 숫자를 입력할 수 없습니다');
//     }
//     if (tries.includes(input)) {
//         return alert('이미 시도한 값입니다');
//     }
//     return true;
// }

const $ = (selector) => document.querySelector(selector);
$('form').addEventListener('submit', (e) => {
    e.preventDefault();
});

function madeNumArr() {
    let answer = Array(9)
        .fill()
        .map((el, index) => {
            return index + 1;
        });
    return answer;
}

function madeNumRandom() {
    let arr = new Array();
}
