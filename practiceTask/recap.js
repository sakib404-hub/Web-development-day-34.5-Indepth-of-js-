console.log(1);
console.log(2);
setTimeout(() => {
  console.log(3);
}, 4000);
console.log(4);
console.log(5);

//? Promise

const getData = new Promise((resolve, reject) => {
  const number = Math.random() * 10;
  // console.log(`Generated number is : ${number}`);
  if (number > 3) {
    resolve({ number: number });
  } else {
    reject({ err: `Data is not available` });
  }
});
getData.then((info) => console.log(info)).catch((err) => console.log(err));

//? multiple promise
const getData1 = new Promise((resolve, reject) => {
  const number = Math.random() * 10;
  // console.log(`Generated number is : ${number}`);
  if (number > 3) {
    resolve({ number: number });
  } else {
    reject({ err: `Data is not available` });
  }
});

const getData2 = new Promise((resolve, reject) => {
  const number = Math.random() * 10;
  // console.log(`Generated number is : ${number}`);
  if (number > 3) {
    resolve({ number: number });
  } else {
    reject({ err: `Data is not available` });
  }
});

const getData3 = new Promise((resolve, reject) => {
  const number = Math.random() * 10;
  // console.log(`Generated number is : ${number}`);
  if (number > 3) {
    resolve({ number: number });
  } else {
    reject({ err: `Data is not available` });
  }
});

Promise.all([getData1, getData2, getData3])
  .then((info) => console.log(info))
  .catch((err) => console.log(err));

//? setInterval

console.log(1);
console.log(2);

let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(count);
  if (count >= 5) {
    clearInterval(intervalId);
  }
}, 2000);

console.log(4);
console.log(5);

//? try-Catch block
const loadData = async () => {
  try {
    const url = "https://jsonplaceholder.typicode.com/users";
    const res = await fetch(url);
    const informations = await res.json();
    informations.forEach((info) => {
      console.log(info.name);
    });
  } catch (err) {
    console.log(`Error Finfing the Information : ${err}`);
  }
};

loadData();
