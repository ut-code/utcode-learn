const mathjs = require("mathjs");
const { derivative } = mathjs;
console.log(derivative("log(x, e)", "x").toString());
