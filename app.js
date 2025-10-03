// get buttons and display field from DOM
const display = document.querySelector(".timer-display");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const startBtn = document.querySelector(".start");
const lapBtn = document.querySelector(".lap");
const laps = document.querySelector(".laps");
const displayMode = document.querySelector(".theme-toggle");
const body = document.body;

console.log(body.style);

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
lapBtn.disabled = true;

function updateDisplay() {
  const h = hours.toString().padStart(2, "0");
  const m = minutes.toString().padStart(2, "0");
  const s = seconds.toString().padStart(2, "0");
  const ms = milliSeconds.toString().padStart(2, "0");
  // set display contents
  const displayText = `<div class="timer-display">${h}:${m}:${s}<span id='milli-secs' >${ms}</span></div>`;

  display.innerHTML = displayText;
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
  lapBtn.disabled = false;
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
  laps.innerHTML = "";
  laps.style.display = "none";
};

const stopTimer = () => {
  clearInterval(interval);
  interval = null;
  updateDisplay();
  startBtn.disabled = false;
};

const lapTimer = () => {
  laps.style.display = "block";
  //   format time
  const ms = milliSeconds.toString().padStart(2, "0");
  const s = seconds.toString().padStart(2, "0");
  const m = minutes.toString().padStart(2, "0");
  const h = hours.toString().padStart(2, "0");

  //   add lap to display
  laps.innerHTML += `<div class="timer-display" >${h}:${m}:${s}<span id='milli-secs' >${ms}</span></div>`;

  //   style lap content
  laps.style.scale = "0.5";
};

stopBtn.addEventListener("click", stopTimer);
startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);
lapBtn.addEventListener("click", lapTimer);

// set default text and them to dark
displayMode.innerText = "Dark Mode";

displayMode.addEventListener("click", () => {
  if (displayMode.innerText == "Dark Mode") {
    displayMode.innerText = "Light Mode";
  } else {
    displayMode.innerText = "Dark Mode";
  }
  body.classList.toggle("dark-mode");
});
