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

let timer = document.getElementById("timer");
let startButton = document.getElementById("start-button");
let stopButton = document.getElementById("stop-button");
startButton.onclick = start;
stopButton.onclick = stop;
