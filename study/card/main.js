// const $wrapper = document.querySelector('#wrapper');
// const total = 12;
// const colors = ['red', 'orange', 'yellow', 'green', 'white', 'pink'];
// let colorCopy = colors.concat(colors);
// let shuffled = [];
// let clicked = [];
// let completed = [];
// let clickable = false;

// function shuffle() {
//     for (let i = 0; colorCopy.length > 0; i += 1) {
//         const randomIndex = Math.floor(Math.random() * colorCopy.length);
//         shuffled = shuffled.concat(colorCopy.splice(randomIndex, 1));
//     }
// }

// function createCard(i) {
//     const card = document.createElement('div');
//     card.className = 'card'; // .card 태그 생성
//     const cardInner = document.createElement('div');
//     cardInner.className = 'card-inner'; // .card-inner 태그 생성
//     const cardFront = document.createElement('div');
//     cardFront.className = 'card-front'; // .card-front 태그 생성
//     const cardBack = document.createElement('div');
//     cardBack.className = 'card-back'; // .card-back 태그 생성
//     cardBack.style.backgroundColor = shuffled[i];
//     cardInner.appendChild(cardFront);
//     cardInner.appendChild(cardBack);
//     card.appendChild(cardInner);
//     return card;
// }

// function onClickCard() {
//     if (!clickable || completed.includes(this) || clicked[0] === this) {
//         return;
//     }
//     this.classList.toggle('flipped');
//     clicked.push(this);
//     if (clicked.length !== 2) {
//         return;
//     }
//     const firstBackColor = clicked[0].querySelector('.card-back').style.backgroundColor;
//     const secondBackColor = clicked[1].querySelector('.card-back').style.backgroundColor;
//     if (firstBackColor === secondBackColor) {
//         completed.push(clicked[0]);
//         completed.push(clicked[1]);
//         clicked = [];
//         if (completed.length !== total) {
//             return;
//         }
//         setTimeout(() => {
//             alert(`축하합니다!`);
//             resetGame();
//         }, 1000);
//         return;
//     }
//     clickable = false;
//     setTimeout(() => {
//         clicked[0].classList.remove('flipped');
//         clicked[1].classList.remove('flipped');
//         clicked = [];
//         clickable = true;
//     }, 500);
// }

// function startGame() {
//     clickable = false;
//     shuffle();
//     for (let i = 0; i < total; i += 1) {
//         const card = createCard(i);
//         card.addEventListener('click', onClickCard);
//         $wrapper.appendChild(card);
//     }

//     document.querySelectorAll('.card').forEach((card, index) => {
//         // 초반 카드 공개
//         setTimeout(() => {
//             card.classList.add('flipped');
//         }, 1000 + 100 * index);
//     });

//     setTimeout(() => {
//         // 카드 감추기
//         document.querySelectorAll('.card').forEach((card) => {
//             card.classList.remove('flipped');
//         });
//         clickable = true;
//     }, 5000);
// }
// startGame();

// function resetGame() {
//     $wrapper.innerHTML = '';
//     colorCopy = colors.concat(colors);
//     shuffled = [];
//     completed = [];
//     startGame();
// }

// const $wrapper = document.querySelector('#wrapper');
// const total = 12;
// const colors = ['red', 'orange', 'yellow', 'green', 'white', 'pink'];

// function shuffle(colorCopy) {
//     let shuffled = [];
//     while (colorCopy.length > 0) {
//         const randomIndex = Math.floor(Math.random() * colorCopy.length);
//         shuffled = shuffled.concat(colorCopy.splice(randomIndex, 1));
//     }
//     return shuffled;
// }

// function createCard(color, onClickHandler) {
//     const card = document.createElement('div');
//     card.className = 'card';
//     const cardInner = document.createElement('div');
//     cardInner.className = 'card-inner';
//     const cardFront = document.createElement('div');
//     cardFront.className = 'card-front';
//     const cardBack = document.createElement('div');
//     cardBack.className = 'card-back';
//     cardBack.style.backgroundColor = color;
//     cardInner.appendChild(cardFront);
//     cardInner.appendChild(cardBack);
//     card.appendChild(cardInner);
//     card.addEventListener('click', onClickHandler);
//     return card;
// }

// let clickable = false;
// let clicked = [];
// let completed = [];

// function onClickCard(event) {
//     const card = event.currentTarget;
//     if (!clickable || completed.includes(card) || clicked[0] === card) {
//         return;
//     }
//     card.classList.toggle('flipped');
//     clicked.push(card);
//     if (clicked.length !== 2) {
//         return;
//     }
//     const firstBackColor = clicked[0].querySelector('.card-back').style.backgroundColor;
//     const secondBackColor = clicked[1].querySelector('.card-back').style.backgroundColor;
//     if (firstBackColor === secondBackColor) {
//         completed.push(clicked[0]);
//         completed.push(clicked[1]);
//         clicked = [];
//         if (completed.length !== total) {
//             return;
//         }
//         setTimeout(() => {
//             alert(`축하합니다!`);
//             resetGame();
//         }, 1000);
//         return;
//     }
//     clickable = false;
//     setTimeout(() => {
//         clicked[0].classList.remove('flipped');
//         clicked[1].classList.remove('flipped');
//         clicked = [];
//         clickable = true;
//     }, 500);
// }
// function startGame() {
//     clickable = false;
//     clicked = [];
//     completed = [];
//     const colorCopy = colors.concat(colors);
//     const shuffled = shuffle(colorCopy);
//     for (let i = 0; i < total; i += 1) {
//         const card = createCard(shuffled[i], onClickCard);
//         $wrapper.appendChild(card);
//     }
//     document.querySelectorAll('.card').forEach((card, index) => {
//         setTimeout(() => {
//             card.classList.add('flipped');
//         }, 1000 + 100 * index);
//     });
//     setTimeout(() => {
//         document.querySelectorAll('.card').forEach((card) => {
//             card.classList.remove('flipped');
//         });
//         clickable = true;
//     }, 5000);
// }
// function resetGame() {
//     $wrapper.innerHTML = '';
//     startGame();
// }
// startGame();

$wrapper = document.querySelector('#wrapper');
$card = document.querySelector('card');
const shuffle = () => {
    let shuffled = new Array();
    let colors = ['red', 'yellow', 'green', 'orange', 'pink', 'blue'];
    let colorCopy = colors.concat(colors);
    while (colorCopy.length > 0) {
        const randomIndex = Math.floor(Math.random() * colorCopy.length);
        shuffled = shuffled.concat(colorCopy.splice(randomIndex, 1));
    }
    return shuffled;
};
const createCard = (input) => {
    let checked = new Array();
    for (let i = 0; i < input.length; i++) {
        const card = document.createElement('div');
        card.className = 'card';
        const cardInner = document.createElement('div');
        cardInner.className = 'card-inner';
        const cardFront = document.createElement('div');
        cardFront.className = 'card-front';
        const cardBack = document.createElement('div');

        cardBack.style.backgroundColor = input[i];
        cardBack.className = 'card-back';
        cardInner.append(cardFront);
        cardInner.append(cardBack);
        card.append(cardInner);
        card.addEventListener('click', (e) => {
            if (checked.length === 2) {
                return;
            }
            e.currentTarget.classList.add('flipped');
            checked = checked.concat(e.currentTarget);
        });
        $wrapper.append(card);
    }
};

const shuffleItem = shuffle();
const createItem = createCard(shuffleItem);
