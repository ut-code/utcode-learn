function wait(time_ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, time_ms);
  });
}

function assertEven(number) {
  return new Promise((resolve, reject) => {
    wait(1000).then(() => {
      if (number % 2 === 0) resolve(` ${number} can be divided by two!`);
      else reject(` ${number} cannot be divided by two!`);
    });
  });
}

function render(number) {
  return assertEven(number)
    .then((result) => {
      console.log("-----------------------------");
      console.log(result);
    })
    .catch((error) => {
      console.log("-----------------------------");
      console.log(error);
    })
    .finally(() => {
      console.log("-----------------------------");
    });
}

render(6).then(() => render(5)); // await 演算子を使っていないので、即時関数にする必要がない
