// const shuffleFuc = () => {
//     const color = ['red', 'blue', 'yellow', 'green', 'pink', 'orange'];
//     let colorCopy = color.concat(color);
//     let shuffled = new Array();
//     for (let i = 0; 0 < colorCopy.length; i++) {
//         const randomIndex = Math.floor(Math.random() * colorCopy.length);
//         shuffled = shuffled.concat(colorCopy.splice(randomIndex, 1));
//     }
//     return shuffled;
// };
// const createCardFuc = (input) => {
//     let completed = new Array();
//     let clicked = new Array();
//     input.forEach((a, i) => {
//         const wrapper = document.querySelector('#wrapper');

//         const card = document.createElement('div');
//         card.className = 'card';
//         const cardInner = document.createElement('div');
//         cardInner.className = 'card-inner';
//         const cardFront = document.createElement('div');
//         cardFront.className = 'card-front';
//         const cardBack = document.createElement('div');

//         cardBack.className = 'card-back';
//         cardBack.style.background = a;
//         cardInner.append(cardFront);
//         cardInner.append(cardBack);
//         card.append(cardInner);
//         card.addEventListener('click', function (e) {
//             if (clicked.length < 2) {
//                 e.currentTarget.classList.add('flipped');
//                 clicked.push(e.currentTarget);
//                 if (clicked.length === 2) {
//                     const clickFirst = clicked[0].childNodes[0].children[1].style.background;
//                     const clickSecond = clicked[1].childNodes[0].children[1].style.background;
//                     if (clickFirst === clickSecond) {
//                         completed.push(clicked);
//                         if (completed.length === 6) {
//                             alert('축하합니다!');
//                         }
//                     } else {
//                         setTimeout(() => {
//                             clicked[0].classList.remove('flipped');
//                             clicked[1].classList.remove('flipped');
//                         }, 1000);
//                     }
//                     setTimeout(() => {
//                         clicked.length = 0;
//                     }, 1000);
//                 }
//             }

//             //e.currentTarget은 현재 이벤트리스너가 부착된 태그
//         });
//         wrapper.append(card);
//     });
// };

// const startGame = () => {
//     document.querySelectorAll('.card').forEach((card, i) => {
//         setTimeout(() => {
//             card.classList.add('flipped');
//         }, 200 * i);
//     });
//     document.querySelectorAll('.card').forEach((card, i) => {
//         setTimeout(() => {
//             card.classList.remove('flipped');
//         }, 5000);
//     });
// };

// const shuffle = shuffleFuc();
// const createCard = createCardFuc(shuffle);

// const $startBtn = document.querySelector('#startBtn');
// $startBtn.onclick = startGame;

const $wrapper = document.querySelector('#wrapper');
const total = 12;
const colors = ['red', 'orange', 'yellow', 'green', 'white', 'pink'];
let colorCopy = colors.concat(colors);
let shuffled = [];
let clicked = [];
let completed = [];
let clickable = false;

function shuffle() {
    for (let i = 0; colorCopy.length > 0; i += 1) {
        const randomIndex = Math.floor(Math.random() * colorCopy.length);
        shuffled = shuffled.concat(colorCopy.splice(randomIndex, 1));
    }
}

function createCard(i) {
    const card = document.createElement('div');
    card.className = 'card'; // .card 태그 생성
    const cardInner = document.createElement('div');
    cardInner.className = 'card-inner'; // .card-inner 태그 생성
    const cardFront = document.createElement('div');
    cardFront.className = 'card-front'; // .card-front 태그 생성
    const cardBack = document.createElement('div');
    cardBack.className = 'card-back'; // .card-back 태그 생성
    cardBack.style.backgroundColor = shuffled[i];
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
    return card;
}

function onClickCard() {
    if (!clickable || completed.includes(this) || clicked[0] === this) {
        return;
    }
    this.classList.toggle('flipped');
    clicked.push(this);
    if (clicked.length !== 2) {
        return;
    }
    const firstBackColor = clicked[0].querySelector('.card-back').style.backgroundColor;
    const secondBackColor = clicked[1].querySelector('.card-back').style.backgroundColor;
    if (firstBackColor === secondBackColor) {
        completed.push(clicked[0]);
        completed.push(clicked[1]);
        clicked = [];
        if (completed.length !== total) {
            return;
        }
        setTimeout(() => {
            alert(`축하합니다!`);
            resetGame();
        }, 1000);
        return;
    }
    clickable = false;
    setTimeout(() => {
        clicked[0].classList.remove('flipped');
        clicked[1].classList.remove('flipped');
        clicked = [];
        clickable = true;
    }, 500);
}

function startGame() {
    clickable = false;
    shuffle();
    for (let i = 0; i < total; i += 1) {
        const card = createCard(i);
        card.addEventListener('click', onClickCard);
        $wrapper.appendChild(card);
    }

    document.querySelectorAll('.card').forEach((card, index) => {
        // 초반 카드 공개
        setTimeout(() => {
            card.classList.add('flipped');
        }, 1000 + 100 * index);
    });

    setTimeout(() => {
        // 카드 감추기
        document.querySelectorAll('.card').forEach((card) => {
            card.classList.remove('flipped');
        });
        clickable = true;
    }, 5000);
}
startGame();

function resetGame() {
    $wrapper.innerHTML = '';
    colorCopy = colors.concat(colors);
    shuffled = [];
    completed = [];
    startGame();
}
