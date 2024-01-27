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

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: '101',
//     }),
// })
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data);
//     });
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
    // 자세한 사항은 => https://velog.io/@minew1995/JavaScript-new-Map
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
// 5. 달리기 경주
function solution5(players, calling) {
    for (let i = 0; i < calling.length; i++) {
        let num = players.indexOf(calling[i]);
        if (num > 0) {
            const test = players[num - 1];
            players[num - 1] = players[num];
            players[num] = test;
        }
    }
    return players;
}

solution5(['A', 'B', 'C', 'D'], ['B', 'C']);

//연속된 부분 수열의 합
function solution6(sequence, k) {
    let result = [];
    let sum = 0;
    let left = 0;
    for (let right = 0; right < sequence.length; right++) {
        sum += sequence[right];
        while (sum > k) {
            sum -= sequence[left];
            left += 1;
        }

        if (sum === k) result.push([left, right]);
    }
    result.sort((a, b) => {
        if (a[1] - a[0] === b[1] - b[0]) a[0] - b[0];
        return a[1] - a[0] - (b[1] - b[0]);
    });

    return result[0];
}

// 6. 가장 많이 받은 선물
function solution7(friends, gifts) {
    let answer = 0; // 정답
    let dstData = {}; // 파싱될 데이터 초기화
    // dstData 초기화
    friends.forEach((outerName) => {
        dstData[outerName] = {};
        friends.forEach((innerName) => {
            if (outerName !== innerName) {
                // 이름이 같지 않을 경우 [준 개수 = 0, 받은 개수 = 0] 으로 초기화
                dstData[outerName][innerName] = [
                    0, // 준 개수
                    0, // 받은 개수
                ];
            }
            // 이름이 같은 경우 선물 지수 0으로 초기화
            else {
                dstData[outerName][innerName] = 0;
            }
        });
    });
    console.log(dstData);
    // dstData 파싱
    gifts.forEach((gift) => {
        [
            from, // 선물을 준 사람
            to, // 선물을 받은 사람
        ] = gift.split(' ');
        dstData[from][from] += 1; // 선물을 준 사람의 선물 지수 증감
        dstData[to][to] -= 1; // 선물을 받은 사람의 선물 지수 감소
        // 선물 계수 계산
        dstData[from][to][0] += 1;
        dstData[to][from][1] += 1;
    });
    Object.entries(dstData).forEach(([name, giftDatas], index) => {
        tempAnswer = 0; // 임시 정답 데이터
        Object.entries(giftDatas).forEach(([toName, giftData], index) => {
            // 받은 사람과 준 사람의 이름이 다른 경우
            if (name !== toName) {
                const [
                    give, // 선물 준 사람
                    receive, // 선물 받은 사람
                ] = [...giftData];
                // 선물 준 사람의 갯수가 더 많을 경우
                if (give > receive) {
                    // 정답 증가
                    tempAnswer += 1;
                }
                // 선물 준 사람과 받은 사람의 갯수가 같을 경우
                else if (give === receive) {
                    // 선물 지수 비교
                    // 준 사람의 선물 지수가 큰 경우에만 정답 증가
                    if (dstData[name][name] > dstData[toName][toName]) {
                        tempAnswer += 1;
                    }
                }
            }
        });
        // 정답 갱신
        answer = Math.max(answer, tempAnswer);
    });
    console.log(answer, dstData);
    return answer;
}

solution7(
    ['muzi', 'ryan', 'frodo', 'neo'],
    ['muzi frodo', 'muzi frodo', 'ryan muzi', 'ryan muzi', 'ryan muzi', 'frodo muzi', 'frodo ryan', 'neo muzi']
);

function solution(n) {
    var answer = 0;
    if (n % 2 === 1) {
        for (let i = n; i > 0; i--) {
            if (i % 2 === 1) {
                answer += i;
            }
        }
    } else if (n % 2 === 0) {
        answer = 1;
        for (let i = n; i > 0; i--) {
            if (i % 2 === 0) {
                answer += i * i;
            }
        }
    }
    return answer;
}
solution(10);

function solution10(intStrs, k, s, l) {
    let arr = intStrs.map((a, i) => {
        return a.substr(s, l);
    });
    console.log(arr);
    let fil = arr.filter((a, i) => {
        return Number(a) > k;
    });
    console.log(fil);
    return fil;
}

solution10(['0123456789', '9876543210', '9999999999999'], 50000, 5, 5);
