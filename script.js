const daysEI = document.getElementById('days');
const hoursEI = document.getElementById('hours');
const minutesEI = document.getElementById('minutes');
const secondsEI = document.getElementById('seconds');


function countdown() {
    const winterDate = 1669842000000;
    const nowDate = Date.now();

    const totalSeconds = (winterDate - nowDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEI.innerHTML = days;
    hoursEI.innerHTML = hours;
    minutesEI.innerHTML = minutes;
    secondsEI.innerHTML = seconds;
}

countdown ();

setInterval(countdown, 1000);