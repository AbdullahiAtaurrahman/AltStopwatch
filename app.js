console.log("Hello");

const display = document.querySelector(".timer-display");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const startBtn = document.querySelector(".start");

stopBtn.addEventListener("click", () => {
  console.log("stop");
});
startBtn.addEventListener("click", () => {
  console.log("start");
});
resetBtn.addEventListener("click", () => {
  display.textContent = "00:00:00";
  console.log("reseted");
});
