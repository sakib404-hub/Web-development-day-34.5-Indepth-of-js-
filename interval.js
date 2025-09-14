console.log(1);
console.log(2);

let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(count);
  if (count > 20) {
    clearInterval(intervalId);
  }
}, 2000);
console.log("Interval Id : ", intervalId);
console.log(4);
console.log(5);
