console.log("One");
// callThree();
const url = "https://jsonplaceholder.typicode.com/users";
fetch(url)
  .then((res) => res.json())
  .then((info) => console.log(info));
console.log("Three");
console.log("Four");

function callThree() {
  console.log("Two");
}
