function one() {
  console.log(1);
  two();
}
function two() {
  console.log(2);
  three();
}
function three() {
  //? This is known as the event queue
  setTimeout(() => {
    console.log("Inside three : ", 0);
  }, 0);
  console.log(3);
  four();
}
function four() {
  console.log(4);
  five();
}
function five() {
  //? This is known as the queue
  setTimeout(() => {
    console.log("Inside the timeOut : ", 5);
  }, 0);
  console.log(5);
}

one();
