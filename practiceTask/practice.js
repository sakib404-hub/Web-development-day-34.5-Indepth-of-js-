function tellJocks(jocks, interval) {
  let count = 0;
  const intervalid = setInterval(() => {
    count++;
    console.log(jocks);
    if (count >= 5) {
      clearInterval(intervalid);
    }
  }, interval);
}

tellJocks("How does a penguin Built its house", 2000);
