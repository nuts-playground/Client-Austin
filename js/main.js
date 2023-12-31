const loginForm = document.querySelector('#loginFormModal');
const loginBg = document.querySelector('.loginBg');
const loginBtn = document.querySelector('.loginBtn');
const clickLogin = document.querySelector('.clickLogin');

loginBtn.onclick = toggleFormVisibility;
loginBg.addEventListener('click', (e) => {
    if (e.target === loginBg) {
        toggleFormVisibility();
    }
});

// document.querySelector('.pwCheck').onclick = checkPassword;
document.querySelector('.dark').onclick = toggleTheme;
document.querySelector('.light').onclick = toggleTheme;

// Login
clickLogin.addEventListener('click', (e) => {
    e.preventDefault();
    async function requestAfter() {
        try {
            await request();
            console.log('데이터 불러오기 성공');
        } catch (error) {
            console.log(error);
        }
    }
    requestAfter();
});
async function request() {
    try {
        const URL = '/js/db.json';
        const request = await fetch(URL, { method: 'GET' });
        if (!request.ok) {
            throw new Error('에러');
        }
        const data = await request.json();
        console.log(data);
        const User = data.USER;
        const LoginId = document.querySelector('#username').value;
        const LoginPw = document.querySelector('#password').value;
        const CheckUser = User.find((user) => user.ID === LoginId && user.PW === LoginPw);
        if (CheckUser) {
            alert(`환영합니다 ${CheckUser.NAME}님`);
            document.querySelector('.loginForm').submit();
        } else {
            alert('아이디 또는 비밀번호가 일치하지 않습니다.');
        }
    } catch (error) {
        console.log(error);
    } finally {
        console.log('끝');
    }
}

// 함수영역

function checkPassword() {
    const pw1 = document.querySelector('.joinPwFirst');
    const pw2 = document.querySelector('.joinPwTwo');
    const t_pwCheck = document.querySelector('.t_pwCheck');
    if (pw1.value === pw2.value && pw1.value !== '' && pw2.value !== '') {
        t_pwCheck.innerText = '비밀번호가 일치합니다';
        t_pwCheck.classList.add('t_green');
    } else {
        t_pwCheck.innerText = '비밀번호가 일치하지 않습니다';
        t_pwCheck.classList.remove('t_green');
    }
}

function toggleTheme() {
    const body = document.querySelector('body');
    const darkButton = document.querySelector('.dark');
    const lightButton = document.querySelector('.light');
    if (body.getAttribute('data-theme') === 'dark') {
        body.setAttribute('data-theme', 'light');
        darkButton.classList.remove('hide');
        lightButton.classList.add('hide');
    } else {
        body.setAttribute('data-theme', 'dark');
        lightButton.classList.remove('hide');
        darkButton.classList.add('hide');
    }
}
function toggleFormVisibility() {
    loginForm.classList.toggle('vb');
    loginForm.classList.toggle('notVb');
}

// 쿵쿵따
let TotalNum = 6;
// let TotalNum = parseFloat(prompt('참가할 인원을 설정해주세요'));
let TotalNumError = !!TotalNum == false || TotalNum == 0;
const $order = document.querySelector('#order');
const $wordInput = document.querySelector('#wordInput');
const $word = document.querySelector('#word');
const $clickBtn = document.querySelector('.clickBtn');
let newWorld;
let word;
if (TotalNumError) {
    TotalNum = parseFloat(prompt('참가할 인원을 다시 설정해주세요'));
    if (TotalNumError) {
        alert('게임을 이용할 수 없습니다');
        $wordInput.setAttribute('disabled');
    }
}
const 제시어입력 = () => {
    if (!word) {
        word = newWorld;
        $word.textContent = word;
        $wordInput.value = '';
        $order.textContent = Number($order.textContent) + 1;
        $wordInput.focus();
    } else {
        if (word[word.length - 1] === newWorld[0]) {
            word = newWorld;
            $word.textContent = word;
            $wordInput.value = '';
            $wordInput.focus();
            if (Number($order.textContent) < TotalNum) {
                $order.textContent = Number($order.textContent) + 1;
            } else {
                $order.textContent = 1;
            }
        } else {
            alert(`올바르지 않은 단어 입니다. ${$order.textContent}번째 참가자가 졌습니다`);
            $order.textContent = 1;
            $wordInput.value = '';
            $word.textContent = '';
            word = false;
            $wordInput.focus();
        }
    }
};
const 쿵쿵따인풋 = (e) => {
    newWorld = e.target.value;
};
// $clickBtn.addEventListener('click', 제시어입력);
// $wordInput.addEventListener('input', 쿵쿵따인풋);
