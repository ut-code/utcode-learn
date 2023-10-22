function assertEven(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number % 2 == 0) {
        resolve(number);
      } else {
        reject(number);
      }
    }, 1000);
  });
}

async function checkEven(number) {
  assertEven(number)
    .then((result) => {
      console.log("-----------------------------");
      console.log(`${result} can be divided by two!`);
    })
    .catch((result) => {
      console.log("-----------------------------");
      console.log(`${result} cannot be divided by two!`);
    })
    .finally(() => console.log("-----------------------------"));
}

checkEven(6);
checkEven(5);
