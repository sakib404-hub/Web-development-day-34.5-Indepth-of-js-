const getData = new Promise((resolve, reject) => {
  const number = Math.random() * 10;
  console.log(`Generated Number : ${number}`);

  if (number > 5) {
    resolve({ number: number });
  } else {
    reject({ err: "Information is not available" });
  }
});

getData.then((info) => console.log(info)).catch((err) => console.log(err));
