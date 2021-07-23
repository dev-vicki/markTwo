// importing libraries from npm
const readLineSync = require("readline-sync");
const chalk = require("chalk");

// Taking userName
const userName = readLineSync.question(chalk.yellow.bold("To play quiz please enter your name : "));

// score initialized
let score = 0;