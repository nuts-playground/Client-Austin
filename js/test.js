//클로저
function makeFunc() {
    const name = 'Mozilla';
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();

const counter = (function () {
    let privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }

    return {
        increment() {
            changeBy(1);
        },

        decrement() {
            changeBy(-1);
        },

        value() {
            return privateCounter;
        },
    };
})();
console.log(counter.value());

// fetch
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
xhr.send();
xhr.onload = () => {
    console.log(xhr.response);
};

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: '101',
    }),
})
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    });
//페이지 네이션 구현해보기

// * 백준 프로그래머스

// 1. 몫구하기
function solution(num1, num2) {
    let answer = 0;
    if (num1 > 0 && num1 <= 100 && num2 > 0 && num2 <= 100) {
        answer = num1 / num2;
        return answer;
    } else {
        return answer;
    }
}
// 2. 출생년도
function solution2(age) {
    let year = new Date().getFullYear();
    let answer = 0;
    if (age > 0 && age <= 120) {
        answer = year - age;
        console.log(answer);
        return answer;
    } else {
        return answer;
    }
}
// 3. 공백 나누기
function solution3(my_string) {
    var answer = [];
    // spilt()는 문자열을 구분자로 잘라서 array에 각각의 문자열로 저장해줌
    let arr = my_string.split(' ');
    console.log(arr);
    return answer;
}
// 4. 추억점수 // 풀이 보지 말고 다시해보기
function solution4(name, yearning, photo) {
    const answer = [];
    const hash = new Map();
    // new Map(["a","b"]) 를 통해 'a' => 'b' 라는 객체(참조값) 생성
    name.forEach((item, index) => {
        hash.set(item, yearning[index]);
    });
    console.log(hash);
    for (let i = 0; i < photo.length; i++) {
        let count = 0;
        for (let j = 0; j < photo[i].length; j++) {
            const score = hash.get(photo[i][j]);

            if (!score) {
                continue;
            }
            count += score;
        }
        answer.push(count);
    }
    console.log(answer);
    return answer;
}
