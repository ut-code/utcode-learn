let timerId;

function start() {
  timerId = setInterval(tick, 1000);
}

let time = 0;

function tick() {
  time += 1;
  timer.textContent = time;
}

function stop() {
  clearInterval(timerId);
}

const timer = document.getElementById("timer");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
startButton.onclick = start;
stopButton.onclick = stop;
