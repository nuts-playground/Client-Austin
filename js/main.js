const loginForm = document.querySelector('#loginFormModal');
const loginBg = document.querySelector('.loginBg');
const loginBtn = document.querySelector('.loginBtn');

loginBtn.addEventListener('click', () => {
    loginForm.classList.add('vb');
    loginForm.classList.remove('notVb');
});
loginBg.addEventListener('click', (e) => {
    if (e.target === loginBg) {
        loginForm.classList.add('notVb');
        loginForm.classList.remove('vb');
    }
});

document.querySelector('.dark').addEventListener('click', (e) => {
    document.querySelector('.light').classList.remove('hide');
    document.querySelector('.dark').classList.add('hide');
    document.querySelector('body').setAttribute('data-theme', 'dark');
});
document.querySelector('.light').addEventListener('click', (e) => {
    document.querySelector('.dark').classList.remove('hide');
    document.querySelector('.light').classList.add('hide');
    document.querySelector('body').setAttribute('data-theme', 'light');
});

function sticky() {
    const ctn = document.querySelector('.container');
    const height = ctn.scrollTop;
    console.log(height);
}
