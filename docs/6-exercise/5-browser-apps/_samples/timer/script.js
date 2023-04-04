//DOMの取得
const timerDisplay = document.getElementById("time");
const hourInput = document.getElementById("hour-input");
const minuteInput = document.getElementById("minute-input");
const secondInput = document.getElementById("second-input");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const setButton = document.getElementById("set-button");
const errorConsole = document.getElementById("error-console");

let existingAudio = null;

// タイマー本体
class Timer {
  timeLeft = 0;

  tickerId;

  // スタートしたときに実行される関数
  onStart;
  
  // ストップしたときに実行される関数
  onStop;

  // タイムアップしたときに実行される関数
  onTimeUp;

  constructor(onStart, onStop, onTimeUp) {
    this.onStart = onStart;
    this.onStop = onStop;
    this.onTimeUp = onTimeUp;
  }

  // カウントダウンをスタートするメソッド
  startCountDown() {
    this.onStart();
    // カウントダウン処理
    this.tickerId = setInterval(() => {
      this.timeLeft -= 100;
      if (this.timeLeft === 0) {
        clearInterval(this.tickerId);
        this.onTimeUp();
      }
    }, 100);
  }

  // カウントダウンをストップするメソッド
  stopCountDown() {
    if (!this.onStop) {
      throw new Error();
    }
    this.onStop();
    clearInterval(this.tickerId);
  }

  // 残り時間をセットするメソッド
  setTimeLeft(period) {
    this.stopCountDown();
    this.timeLeft = period;
  }
}

const timer = new Timer( () => {
        startButton.disabled = true;
        stopButton.disabled = false;
      },
      () => {
        startButton.disabled = false;
        stopButton.disabled = true;
        destroyAudioIfExists();
      },
      () => {
        startButton.disabled = true;
        stopButton.disabled = false;
        createAudioIfNone() })

// 音が出ていなければ音を出す
function  createAudioIfNone() {
    if (!existingAudio) {
      existingAudio = new Audio();
      existingAudio.src = "alarm-buzzer.wav";
      existingAudio.addEventListener("canplaythrough", () => {
        existingAudio.play();
      });
    }
  }

// 音が出ていれば途中で消す
function   destroyAudioIfExists() {
  if (existingAudio) {
    existingAudio.pause();
    existingAudio.removeAttribute("src"); // empty source
    existingAudio.load();
    existingAudio = null;
  }
}

// スタートボタンを押すと、残り時間がある時はカウントダウンし、ないときはエラーが出る
startButton.onclick = () => {
  if (timer.timeLeft > 0) {
    timer.startCountDown();
  } else if (timer.timeLeft === 0) {
    errorConsole.textContent = "時間をセットしてください";
  } else throw new Error();
};

// ストップボタンを押すと、カウントダウンがストップする
stopButton.onclick = () => {
  timer.stopCountDown();
};

// はじめはストップボタンは押せないようにする
stopButton.disabled = true;

// セットボタンを押すと残り時間がセットされる
setButton.onclick = () => {
  errorConsole.textContent = "";
  timer.setTimeLeft(
    Number(hourInput.value) * 1000 * 60 * 60 +
      Number(minuteInput.value) * 1000 * 60 +
      Number(secondInput.value) * 1000
  );
};

// タイマーの描画を開始
setInterval(() => {
  let timeLeftCopy = timer.timeLeft + 999;
  // 時間を取得
  const hour = Math.floor(timeLeftCopy / (1000 * 60 * 60));
  timeLeftCopy -= hour * (1000 * 60 * 60);

  // 分を取得
  const minute = Math.floor(timeLeftCopy / (1000 * 60));
  timeLeftCopy -= minute * (1000 * 60);

  // 秒を取得
  const second = Math.floor(timeLeftCopy / 1000);
  timeLeftCopy -= second * 1000;

  // 表示用に時刻表示を整える
  let hourString = hour.toString();
  let minuteString = minute.toString();
  let secondString = second.toString();
  if (hourString.length === 1) {
    hourString = `0${hourString}`;
  }
  if (minuteString.length === 1) {
    minuteString = `0${minuteString}`;
  }
  if (secondString.length === 1) {
    secondString = `0${secondString}`;
  }

  // 時間を表示
  timerDisplay.textContent = `${hourString}:${minuteString}:${secondString}`;
}, 10);

