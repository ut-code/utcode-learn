function wait(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), time);
  });
}

async function assertEven(number) {
  await wait(1000);
  if (number % 2 === 0) return ` ${number} can be divided by two!`;
  else throw ` ${number} cannot be divided by two!`;
}

async function render(number) {
  try {
    const result = await assertEven(number);
    console.log("-----------------------------");
    console.log(result);
  } catch (error) {
    console.log("-----------------------------");
    console.log(error);
  } finally {
    console.log("-----------------------------");
  }
}

async function main() {
  await render(6);
  await render(5);
}

main();
