console.log("hello world!");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? ", function (name) {
  if(name.trim()) {
    console.log(`Hello, ${name}!`);
  } else {
    console.log('Error: please enter a name.');
  }
  
  rl.close();
});
