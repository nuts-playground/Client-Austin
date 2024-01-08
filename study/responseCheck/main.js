const init = () => {
    const $screen = document.querySelector('#screen');
    const $result = document.querySelector('#result');
    const $ranking = document.querySelector('#ranking');

    let startTime = null;
    let endTime = null;
    let timeOutId = null;
    let records = [];

    const handleScreenClick = (e) => {
        if (e.target.classList.contains('waiting')) {
            $screen.classList.replace('waiting', 'ready');
            $screen.textContent = '초록색이 되면 클릭하세요';
            $result.textContent = '대기중';

            const readyOn = () => {
                startTime = new Date(); // 타이머 시작
                $screen.classList.replace('ready', 'now');
                $screen.textContent = '지금 클릭하세요!';
            };

            const randomNum = Math.floor(Math.random() * 1000) + 2000; // 4~5 초 사이
            timeOutId = setTimeout(readyOn, randomNum);
        } else if (e.target.classList.contains('ready')) {
            clearTimeout(timeOutId);
            $result.textContent = '너무 성급했네요! 시작화면으로 이동합니다';
            $screen.classList.replace('ready', 'waiting');
            $screen.textContent = '클릭하면 시작합니다';
        } else if (e.target.classList.contains('now')) {
            endTime = new Date(); // 끝 시간 계산
            const current = endTime - startTime;
            records.push(current);
            let average = Math.floor(records.reduce((a, c) => a + c) / records.length);
            startTime = null;
            endTime = null;
            $result.textContent = `당신의 반응속도는 ${current}ms 입니다. 평균 반응속도는 ${average}ms 입니다`;
            let sortRecordTop5 = records.sort((a, b) => a - b).slice(0, 5);
            $ranking.textContent = '';
            sortRecordTop5.forEach((a, i) => {
                let temp = `<p>${i + 1}등 : ${a}ms</p>`;
                $ranking.insertAdjacentHTML('beforeend', temp);
            });

            $screen.classList.replace('now', 'waiting');
            $screen.textContent = '클릭하면 시작합니다';
        }
    };

    $screen.addEventListener('click', handleScreenClick);
};

init();
