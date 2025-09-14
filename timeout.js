console.log("one");
console.log("Two");

//! setting timeout for the first time
const timeOutId = setTimeout(() => {
  console.log(3);
}, 5000);

//! setting timeout for the second time
const timeOutId2 = setTimeout(() => {
  console.log(44);
}, 5000);

console.log("timeOutId : ", timeOutId, timeOutId2);
// console.log("timeoutId : ", timeOutId);
// console.log("timeoutId : ", timeOutId2);

console.log("Four");
console.log("Five");
console.log(6);
