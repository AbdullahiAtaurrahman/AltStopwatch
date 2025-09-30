console.log("Hello");

const display = document.querySelector(".timer-display");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const startBtn = document.querySelector(".start");

console.log(typeof 0);
let s = 0;
let m = 0;
let h = 0;

stopBtn.addEventListener("click", () => {
  console.log("stop");
});
startBtn.addEventListener("click", () => {
  console.log("start");

  secIncrement(s);
});
resetBtn.addEventListener("click", () => {
  display.textContent = `00:00:00`;
  console.log("reseted");
});

const secIncrement = (s) => {
  let news;
  setInterval(() => {
    news = s++;
    display.textContent = `00:00:${news}`;
    return news;
  }, 1000);
};
