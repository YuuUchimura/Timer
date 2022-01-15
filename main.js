const setTime = document.getElementById("setTime");
const startTimer = document.getElementById("startTimer");
const stopTimer = document.getElementById("stopTimer");
const nowTime = document.getElementById("nowTime");


let sec;
let timer;
let leftHour;
let leftMin;
let leftSec;

setTime.addEventListener("click", () => {
    sec = document.getElementById("inputTime").value;
    leftSec = sec % 60;
    leftMin = Math.floor((sec % 3600) / 60);
    leftHour = Math.floor(sec / 3600);
    nowTime.textContent = `残り${leftHour}時間${leftMin}分${leftSec}秒：セット完了です:`
});

startTimer.addEventListener("click", () => {
    clearInterval(timer);
    timer = setInterval("countUp()", 1000);

});

stopTimer.addEventListener("click", () => {
    clearInterval(timer);
    leftSec = sec % 60;
    leftMin = Math.floor((sec % 3600) / 60);
    leftHour = Math.floor(sec / 3600);
    nowTime.textContent = `残り${leftHour}時間${leftMin}分${leftSec}秒：ストップしました`
})

const countUp = () => {
    sec--;
    leftSec = sec % 60;
    leftMin = Math.floor((sec % 3600) / 60);
    leftHour = Math.floor(sec / 3600);
    nowTime.textContent = `残り${leftHour}時間${leftMin}分${leftSec}秒`;
    if (sec === 0) {
        alert("終了");
        clearInterval(timer);
    }
}