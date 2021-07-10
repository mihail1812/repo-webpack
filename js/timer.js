import {
    formatError
} from "./common.js";

const startButton = document.querySelector("#start").addEventListener("click", startTimer);
const stopButton = document.querySelector("#stop").addEventListener("click", stopTimer);
const clearButton = document.querySelector("#clear").addEventListener("click", clearTimer);
const audio = new Audio('audio/audio.mp3');
const bip = new Audio('audio/bip.mp3');
const bip1 = new Audio('audio/bip1.mp3')
minutes.value = 0;
seconds.value = 0;
let timerId = null;

function startTimer() {
    if ((minutes.value <= 0 && seconds.value <= 0) || (seconds.value >= 60)) {
        timer__err.innerHTML = formatError("Веедите корректное время.")
    } else if (timerId == null) {
        timer__err.innerHTML = "";
        timerId = setInterval(function () {
            if (minutes.value == 0 && seconds.value == 0) {
                audio.play()
                clearInterval(timerId);
                timerId = null;
                minutes.value = "";
                seconds.value = "";

                timer__err.innerHTML = formatError("Время вышло!")
            } else if (seconds.value == 0) {
                minutes.value--
                seconds.value = 59;
                bip.play();
            } else {
                seconds.value--
                if (minutes.value == 0 && seconds.value <= 5) {
                    bip1.play()
                } else {
                    bip.play()
                }

            }
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timerId);
    timerId = null;
}

function clearTimer() {
    timer__err.innerHTML = "";
    clearInterval(timerId);
    minutes.value = 0;
    seconds.value = 0;
    timerId = null;
}