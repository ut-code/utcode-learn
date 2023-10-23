function wait(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), time);
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

function main() {
  render(6).then(() => render(5));
}

main();
