async function loadData() {
  console.log("One");
  console.log("Two");
  const url = "https://jsonplaceholder.typicode.com/users";

  //!  Asynchronous
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((info) => console.log("Got the information"))
  //     .catch((err) => console.log(err));

  //!  Making this synchronous
  const res = await fetch(url);
  const data = await res.json();
  console.log("Data got await : ");

  console.log("Four");
  console.log("Five");
}

loadData();

// Making an arrow function synchronous

const addtow = async () => {
  console.log("This a arrow function which we will make it Synchronous!");

  try {
  } catch (err) {
    console.log(err);
  }
};

// making loadDataTwo with arrow function and try catch block

const loadData2 = async () => {
  console.log(1);
  console.log(2);
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log("Data got await and the legth is  : ", data.length);
  } catch (err) {
    console.log(err);
  }
  console.log(4);
  console.log(5);
};

try {
} catch (error) {}
