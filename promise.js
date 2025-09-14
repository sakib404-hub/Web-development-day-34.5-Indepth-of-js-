// const url = "https://jsonplaceholder.typicode.com/users";

// fetch(url)
//   .then((res) => res.json())
//   .then((info) => console.log(info))
//   .catch((err) => console.log(err));

const getData = new Promise((resolve, reject) => {
  const number = Math.random() * 10;
  if (number > 5) {
    resolve({ number: number });
  } else {
    reject({ err: "Data is not Available" });
  }
});

getData
  .then((info) => console.log("Promise Resolved : ", info))
  .catch((err) => console.log(err));
