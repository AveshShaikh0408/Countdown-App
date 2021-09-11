// Element selection
const timerText = document.getElementById('timer');
const subText = document.getElementById('sub-text');
const btnStart = document.querySelector('.btn--start');
const btnReset = document.querySelector('.btn--reset');

// Global Variables
let Timer;

///////////////// --- Event Listeners --- /////////////////
btnStart.addEventListener('click', () => {
    let time = 60;
    btnStart.classList.add('disabled');

    Timer = setInterval(() => {

        const mint = String(Math.trunc(time / 60)).padStart(2, '0');
        const sec = String(time % 60).padStart(2, '0');
        timerText.textContent = `${mint}:${sec}`;
        subText.textContent = 'Timer Started.. Wait for 1 minute now 🥱, to STOP click RESET';

        if (time === 0) {
            clearInterval(Timer);
            timerText.style.marginBottom = "0.8rem";
            timerText.style.color = "#f00";
            timerText.textContent = "Time's up!! ✋🏻✋🏻";
            subText.textContent = 'Click RESET, and start again! 😎';
        }
        time--;
    }, 1000);

});

btnReset.addEventListener('click', () => {
    clearInterval(Timer);
    timerText.style = "";
    btnStart.classList.remove('disabled');
    timerText.textContent = `00:00`;
    subText.textContent = '(Start Timer for 1 minute ⏳!!)';
})

