// get buttons and display field
const display = document.querySelector(".timer-display");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const startBtn = document.querySelector(".start");
const lapBtn = document.querySelector(".lap");
const laps = document.querySelector(".laps");

// create default timer values
let milliSeconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let interval = null;

// hide laps dive by default
laps.style.display = "none";

// disable buttons by default
stopBtn.disabled = true;
resetBtn.disabled = true;

function updateDisplay() {
  const h = hours.toString().padStart(2, "0");
  const m = minutes.toString().padStart(2, "0");
  const s = seconds.toString().padStart(2, "0");
  const ms = milliSeconds.toString().padStart(2, "0");
  const displayText = `<div class="timer-display">${h}:${m}:${s}<span id='milli-secs' >${ms}</span></div>`;
  display.innerHTML = displayText;
  let span = document.querySelector("#milli-secs");
  span.style.color = "red";
}

const startTimer = () => {
  if (interval) return;
  interval = setInterval(() => {
    milliSeconds++;
    if (milliSeconds >= 100) {
      seconds++;
      milliSeconds = 0;
    }
    if (seconds >= 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes >= 60) {
      hours++;
      minutes = 0;
    }
    if (hours >= 24) {
      display.textContent = `${"Please restart stopwatch"}`;
    }

    updateDisplay();
  }, 10);
  stopBtn.disabled = false;
  resetBtn.disabled = false;
  startBtn.disabled = true;
};

const resetTimer = () => {
  clearInterval(interval);
  interval = null;
  seconds = 0;
  minutes = 0;
  hours = 0;
  milliSeconds = 0;
  updateDisplay();
  stopBtn.disabled = false;
  resetBtn.disabled = false;
  startBtn.disabled = false;
};

const stopTimer = () => {
  clearInterval(interval);
  interval = null;
  updateDisplay();
  startBtn.disabled = false;
};

const lapTimer = () => {
  // show the laps container
  laps.style.display = "block";

  // create a lap element
  const lapItem = document.createElement("li");
  lapItem.style.listStyle = "none";
  lapItem.style.fontFamily = "monospace";
  lapItem.style.margin = "5px 0";

  // format the current time
  const h = hours.toString().padStart(2, "0");
  const m = minutes.toString().padStart(2, "0");
  const s = seconds.toString().padStart(2, "0");
  const ms = milliSeconds.toString().padStart(2, "0");

  lapItem.textContent = `${h}:${m}:${s}.${ms}`;

  // append lap to laps container
  laps.appendChild(lapItem);
};

stopBtn.addEventListener("click", stopTimer);
startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);
lapBtn.addEventListener("click", lapTimer);
