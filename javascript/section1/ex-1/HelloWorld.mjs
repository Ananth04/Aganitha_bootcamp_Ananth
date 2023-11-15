//const chalk = require('chalk');
//const readline = require('readline');
import chalk from 'chalk';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question('What is your name? ', (name) => {
    console.log(chalk.green(`Hello, ${name}!`));
    rl.close();
});