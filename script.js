let seconds = 0;
let tens = 0;
let startButton = document.querySelector(".start");
let stopButton = document.querySelector(".stop");
let resetButton = document.querySelector(".reset");
let timer = document.querySelector(".timer");
let appendTens = document.querySelector(".tens");
let appendSeconds = document.querySelector(".seconds")
let Interval;

startButton.addEventListener("click", () => {
    clearInterval(Interval);
    Interval = setInterval(setTimer, 10);
})

stopButton.addEventListener("click", () => {
    clearInterval(Interval);
})

resetButton.addEventListener("click", () => {
    clearInterval(Interval);
    appendSeconds.innerHTML = "00";
    appendTens.innerHTML = "00";
})

function setTimer() {
    tens++;
    if (tens <= 9) {
        appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
        appendTens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
}







