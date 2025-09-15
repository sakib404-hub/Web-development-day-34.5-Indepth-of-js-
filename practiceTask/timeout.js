//! 1
console.log("Start");
setTimeout(() => {
  console.log("SetTimeout");
}, 3000);
console.log("End");

//! 2
function repeatGreeating(name) {
  setTimeout(() => {
    console.log(`Hellow ${name}`);
  }, 5000);
}

repeatGreeating("Alice");

//! 3

setTimeout(() => {
  console.log(1);
}, 0);

setTimeout(() => {
  console.log(2);
}, 1000);

setTimeout(() => {
  console.log(3);
}, 2000);

setTimeout(() => {
  console.log(4);
}, 3000);

setTimeout(() => {
  console.log(5);
}, 4000);
