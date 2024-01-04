// document.querySelector('.pwCheck').onclick = checkPassword;
document.querySelector('.dark').onclick = toggleTheme;
document.querySelector('.light').onclick = toggleTheme;

// Login
// clickLogin.addEventListener('click', (e) => {
//     e.preventDefault();
//     async function requestAfter() {
//         try {
//             await request();
//             console.log('데이터 불러오기 성공');
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     requestAfter();
// });
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
