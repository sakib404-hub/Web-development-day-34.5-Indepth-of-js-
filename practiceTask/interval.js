//! 4
let count = 0;
const setIntervalId = setInterval(() => {
  count++;
  console.log("Tick");
  if (count >= 5) {
    clearInterval(setIntervalId);
  }
}, 2000);

//! 5
let countDown = 10;

const setIntervalId2 = setInterval(() => {
  console.log(countDown);
  countDown--;
  if (countDown == 0) {
    console.log(`Time's Up!!`);
    clearInterval(setIntervalId2);
  }
}, 1000);

//! 6 printing the exact time
const format = (n) => String(n).padStart(2, "0");
function printTime() {
  const now = new Date();
  const hh = format(now.getHours());
  const mm = format(now.getMinutes());
  const ss = format(now.getSeconds());
  console.log(`its ${hh}:${mm}:${ss} clock`);
}

printTime();
