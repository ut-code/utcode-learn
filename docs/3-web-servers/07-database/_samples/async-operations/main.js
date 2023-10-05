const fs = require("fs");
const fsPromises = require("fs/promises");

function sync() {
  const buffer = fs.readFileSync("sample.txt");
  console.log(buffer.toString());
}

function callback() {
  fs.readFile("sample.txt", (error, buffer) => {
    console.log(buffer.toString());
  });
}

async function asyncAwait() {
  const buffer = await fsPromises.readFile("sample.txt");
  console.log(buffer.toString());
}

console.log("Before sync()");
sync();
console.log("After sync()");

console.log("Before callback()");
callback();
console.log("After callback()");

console.log("Before asyncAwait()");
asyncAwait();
console.log("After asyncAwait()");
