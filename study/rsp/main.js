// const $computer = document.querySelector('#computer');
// const $score = document.querySelector('#score');
// const $scissors = document.querySelector('#scissors');
// const $rock = document.querySelector('#rock');
// const $paper = document.querySelector('#paper');
// const $start = document.querySelector('#start');
// const $IMG_URL = '../../images/rsp.png';
// $computer.style.background = `url(${$IMG_URL})`;
// $computer.style.backgroundSize = 'auto 200px';

// // 각 이미지 좌표
// const rspX = {
//     scissors: '0',
//     rock: '-220px',
//     paper: '-440px',
// };
// const scoreTable = {
//     rock: 0,
//     scissors: 1,
//     paper: -1,
// };
// let computerMovement = 'scissors';
// const imgChange = () => {
//     if (computerMovement === 'scissors') {
//         computerMovement = 'rock';
//     } else if (computerMovement === 'rock') {
//         computerMovement = 'paper';
//     } else if (computerMovement === 'paper') {
//         computerMovement = 'scissors';
//     }
//     $computer.style.background = `url(${$IMG_URL}) ${rspX[computerMovement]} 0`;
//     $computer.style.backgroundSize = 'auto 200px';
// };

// let intervalId = setInterval(imgChange, 100);
// let checkBtn = true;
// let me = 0;
// let computer = 0;
// const clickBtn = (e) => {
//     if (checkBtn) {
//         clearInterval(intervalId);
//         checkBtn = false;
//         const myChoice =
//             e.target.textContent === '가위' ? 'scissors' : e.target.textContent === '바위' ? 'rock' : 'paper';

//         const myScore = scoreTable[myChoice];

//         const computerScore = scoreTable[computerMovement];
//         const diff = myScore - computerScore;
//         console.log(1);
//         let message = '';
//         if (diff === -1 || diff === 2) {
//             alert('승리');
//             message = '승리';
//             me += 1;
//         } else if (diff === -2 || diff === 1) {
//             alert('패배');
//             message = '패배';
//             computer += 1;
//         } else {
//             alert('무승부');
//             message = '무승부';
//         }

//         if (me >= 3) {
//             $score.textContent = `나의 승리 ${me} : ${computer}`;
//         } else if (computer >= 3) {
//             $score.textContent = `컴퓨터의 승리 ${me} : ${computer}`;
//         } else {
//             setTimeout(() => {
//                 intervalId = setInterval(imgChange, 100);
//                 checkBtn = true;
//             }, 1000);
//             $score.textContent = message;
//         }
//     }
// };

// $scissors.addEventListener('click', clickBtn);
// $rock.addEventListener('click', clickBtn);
// $paper.addEventListener('click', clickBtn);
const $computer = document.querySelector('#computer');
const $start = document.querySelector('#start');
const URL_IMG = '../../images/rsp.png';
$computer.style.background = `url(${URL_IMG})`;
$computer.style.backgroundSize = 'auto 200px';

const initRsp = () => {
    const $score = document.querySelector('#score');
    const $scissors = document.querySelector('#scissors');
    const $rock = document.querySelector('#rock');
    const $paper = document.querySelector('#paper');
    const rspPx = {
        scissors: '0',
        rock: '-220px',
        paper: '-440px',
    };
    const rspScore = {
        scissors: 1,
        rock: 2,
        paper: 3,
    };
    let computerMovement = 'scissors';
    const imgChange = () => {
        if (computerMovement == 'scissors') {
            computerMovement = 'rock';
        } else if (computerMovement == 'rock') {
            computerMovement = 'paper';
        } else if (computerMovement == 'paper') {
            computerMovement = 'scissors';
        }
        $computer.style.background = `url(${URL_IMG}) ${rspPx[computerMovement]} 0`;
        $computer.style.backgroundSize = 'auto 200px';
    };
    let intervalId = setInterval(imgChange, 100);
    const stopMovement = () => {
        clearInterval(intervalId);
        setTimeout(() => {
            intervalId = setInterval(imgChange, 100);
        }, 1000);
    };

    $rock.addEventListener('click', stopMovement);
    $scissors.addEventListener('click', stopMovement);
    $paper.addEventListener('click', stopMovement);
};

// window.onload = initRsp; // 페이지 로드되면 바로 실행
// $start.onclick = initRsp; // 클릭하면 실행
$start.addEventListener('click', initRsp); // 클릭하면 실행
