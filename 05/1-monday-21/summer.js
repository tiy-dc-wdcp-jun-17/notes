const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let number;
rl.question('What is your first number? ', (answer) => {
  number = parseInt(answer);
  rl.question('What is your Second number? ', (answer) => {
    number += parseInt(answer)
    console.log(number);
    rl.close();
  });
});
