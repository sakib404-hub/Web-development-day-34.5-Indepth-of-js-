setTimeout(function hellowWorld() {
  console.log("Hellow World");
  console.log("I wake Up");
}, 5000);

function delayedGreeting(name, delayTime) {
  setTimeout(() => {
    console.log(`Hellow ${name}`);
  }, delayTime);
}

delayedGreeting("Alice", 2000);
