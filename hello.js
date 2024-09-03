console.log("hello world!");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? ", function (name) {
  console.log(`Hello, ${name}!`);
  rl.close();
});
