console.log("This One");
console.log("Thi is Two");
console.log("This is Three");
setTimeout(() => {
  console.log("This is Four");
}, 1000);
console.log("This is FIve");
setTimeout(callSix, 500);
setTimeout(() => {
  console.log("This is Another Thing its new thing");
}, 2000);

function callSix() {
  console.log("This is SIx");
}
