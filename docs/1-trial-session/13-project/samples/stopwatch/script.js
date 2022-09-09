let timerId;

function start() {
  timerId = setInterval(tick, 1000);
}

function stop() {
  clearInterval(timerId);
}

let startButton = document.getElementById("start-button");
let stopButton = document.getElementById("stop-button");
startButton.onclick = start;
stopButton.onclick = stop;

let timer = document.getElementById("timer");

let time = 0;

function tick() {
  time = time + 1;
  timer.textContent = time;
}
