function countDown(from) {
    let temp = from;
    const intervalId = setInterval(() => {
      console.log(temp);
      temp--;
      if (temp <= 0) {
        clearInterval(intervalId);
      }
    }, 1000);
  }
  countDown(30);