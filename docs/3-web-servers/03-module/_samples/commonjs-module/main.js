const sub = require("./sub"); // sub = { add: (a, b) => { return a + b; } }
const add = sub.add;
console.log(add(3, 4));
