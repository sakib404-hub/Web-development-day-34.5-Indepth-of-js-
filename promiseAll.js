const getData1 = new Promise((resolve, reject) => {
  const number = Math.random() * 10;
  if (number > 1) {
    resolve({ number1: number });
  } else {
    reject({ err1: "Data is not Available" });
  }
});

const getData2 = new Promise((resolve, reject) => {
  const number = Math.random() * 10;
  if (number > 1) {
    resolve({ number2: number });
  } else {
    reject({ err2: "Data is not Available" });
  }
});

const getData3 = new Promise((resolve, reject) => {
  const number = Math.random() * 10;
  if (number > 2) {
    resolve({ number3: number });
  } else {
    reject({ err3: "Data is not Available" });
  }
});

Promise.all([getData1, getData2, getData3])
  .then((info) => console.log("The Response is : ", info))
  .catch((err) => console.log(err));
