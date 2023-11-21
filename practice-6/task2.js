function clock() {
  const interval = setInterval(() => {
    const now = new Date();
    console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`)
  }, 1000);

  // Зупинити годинник
  // clearInterval(interval);
}

clock();
