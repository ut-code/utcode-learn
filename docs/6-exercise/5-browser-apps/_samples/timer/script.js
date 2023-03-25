// DOMの取得
const Display = document.getElementById("time");
const hourInput = document.getElementById("hour-input");
const minuteInput = document.getElementById("minute-input");
const secondInput = document.getElementById("second-input");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const setButton = document.getElementById("set-button");
const errorConsole = document.getElementById("error-console");

// タイマー本体
class Timer {
  timeLeft = 0;

  tickerId;

  onStart;

  onStop;

  onTimeUp;

  constructor(onStart, onStop, onTimeUp) {
    this.onStart = onStart;
    this.onStop = onStop;
    this.onTimeUp = onTimeUp;
  }

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

  stopCountDown() {
    if (!this.onStop) {
      throw new Error();
    }
    this.onStop();
    clearInterval(this.tickerId);
  }

  setTimeLeft(period) {
    this.stopCountDown();
    this.timeLeft = period;
  }
}

// 残り時間描画用クラス
class TimeRenderer {
  timer;

  timerDisplay;

  constructor(timer, timerDisplay) {
    this.timer = timer;
    this.timerDisplay = timerDisplay;
  }

  render() {
    let timeLeftCopy = this.timer.timeLeft + 999;
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
    this.timerDisplay.textContent = `${hourString}:${minuteString}:${secondString}`;
  }
}

// 統括クラス
class AppManager {
  timer;

  timeRenderer;

  audio;

  constructor() {
    this.timer = new Timer(
      () => {
        startButton.disabled = true;
        stopButton.disabled = false;
      },
      () => {
        startButton.disabled = false;
        stopButton.disabled = true;
        this.destroyAudioIfExists();
      },
      () => {
        startButton.disabled = true;
        stopButton.disabled = false;
        this.createAudioIfNone();
      }
    );
    this.timeRenderer = new TimeRenderer(this.timer, Display);
    startButton.onclick = () => {
      if (this.timer.timeLeft > 0) {
        this.timer.startCountDown();
      } else if (this.timer.timeLeft === 0) {
        errorConsole.textContent = "時間をセットしてください";
      } else throw new Error();
    };
    stopButton.onclick = () => {
      this.timer.stopCountDown();
    };
    stopButton.disabled = true;
    setButton.onclick = () => {
      errorConsole.textContent = "";
      this.timer.setTimeLeft(
        Number(hourInput.value) * 1000 * 60 * 60 +
          Number(minuteInput.value) * 1000 * 60 +
          Number(secondInput.value) * 1000
      );
    };
  }

  createAudioIfNone() {
    if (!this.audio) {
      this.audio = new Audio();
      this.audio.src = "alarm-buzzer.wav";
      this.audio.addEventListener("canplaythrough", () => {
        this.audio.play();
      });
    }
  }

  destroyAudioIfExists() {
    if (this.audio) {
      this.audio.pause();
      this.audio.removeAttribute("src"); // empty source
      this.audio.load();
      this.audio = null;
    }
  }

  run() {
    setInterval(() => {
      this.timeRenderer.render();
    }, 10);
  }
}

const manager = new AppManager();

manager.run();
