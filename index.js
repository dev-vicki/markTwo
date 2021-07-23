// importing libraries from npm
const readLineSync = require("readline-sync");
const chalk = require("chalk");

// Taking userName
const userName = readLineSync.question(chalk.yellow.bold("To play quiz please enter your name : "));

// score initialized
let score = 0;

const quiz = [
  {
    ask: `1.Which vegetable Shinchan hates to eat?
    a:Capsicum
    b:Brinjal
    c:Potato
    `,
    take: "a",
  },
  {
    ask: `2.What is the name of Shinchan's teacher?
    a:Matsuzaka
    b:Yoshinaga
    c:Nanaco
    `,
    take: "b",
  },
  {
    ask: `3.What is the name of Shinchan's maternal aunt?
    a:Mitsi
    b:Masae
    c:Nanaco
    `,
    take: "b",
  },
  {
    ask: `4.What is the name of Shinchan's father?
    a:Ginnosuke Nohara
    b:Semashi Nohara
    c:Hiroshi Nohara
    `,
    take: "c",
  },
  {
    ask: `5.What is the name of the group created by Shinchan and his friends?
    a:Kasukabe defence group
    b:Kindergarden defence group
    c:Wasabi defence group
    `,
    take: "a",
  },
  {
    ask: `6.What does Shinchan like to eat?
    a:Wafer
    b:Spinach rolls
    c:Chocobi
    `,
    take: "c",
  },
  {
    ask: `7.Which of the following teacher seems to be so nervous?
    a:Matsuzaka
    b:Yoshinaga
    c:Masumi
    `,
    take: "c",
  },
  {
    ask: `8.What colour of clothes does Himawari wears?
    a:Green
    b:pink
    c:yellow
    `,
    take: "c",
  },
  {
    ask: `9.What's the name of the girl whom Shinchan likes so much?
    a:Naneco
    b:Nanny chan
    c:Tamaco
    `,
    take: "a",
  },
  {
    ask: `10.What is the name of the dog that Shinchan has?
    a:Neero
    b:Buro
    c:Sheero
    `,
    take: "c",
  },
  {
    ask: `11.Who is the favorite character of Shinchan?
    a:Doraemon
    b:Action-Kamen
    c:Kenachi
    `,
    take: "b",
  },
  {
    ask: `12.What does Kazama love to do?
    a:Study
    b:Painting
    c:Playing
    `,
    take: "a",
  },
  {
    ask: `13.Can Sheero convert himself into a dodge ball?
    a:yes
    b:no
    c:idk
    `,
    take: "b",
  },
  {
    ask: `14.Which TV channel broadcasts Shin-chan animated series in INDIA?
    a:Pogo TV
    b:Nickelodeon
    c:Hungama TV
    `,
    take: "c",
  },
];

//play game function
function play(ask, take) {
  const usertake = readLineSync.question(chalk.yellow.bold(ask));
  if (usertake.toUpperCase() === take.toUpperCase()) {
    console.log(chalk.green.bold("Your right! "));
    score = score + 5;
  }
  else {
    console.log(chalk.red.bold("You missed it! wrong! "));
    score = score - 3;
  }

  //Displaying cheering message's for player according to points scored
  if (score === 10) {
    console.log(chalk.cyan.bold("Good"))
  } else if (score === 20) {
    console.log(chalk.cyan.bold("Nice"))
  } else if (score === 30) {
    console.log(chalk.cyan.bold("Well done"))
  } else if (score === 40) {
    console.log(chalk.cyan.bold("Awesome"))
  } else if (score === 50) {
    console.log(chalk.cyan.bold("Great"))
  } else if (score === 60) {
    console.log(chalk.cyan.bold("It's Amazing, Are you an addict of this series? bcz i can get to know from your points."))
  } else if (score === 70) {
    console.log(chalk.cyan.bold("It's Marvelous, you have Binged almost every episode's."))
  }
  console.log("Current score :", score);
  console.log("----------------------")
}

// Highest scorer's Database
const highScore = [{
  name: "Vicki",
  oldScore: 40
}, {
  name: "pavi",
  oldScore: 35
}]

//Comparing player score with highest scorer's
function highScoreHandler() {
  if (score > highScore[0].oldScore) {
    console.log("You got a high score than Vicki and grabbed first place in this game")
  } else if (score > highScore[1].oldScore) {
    console.log("You got a high score than pavi and grabbed second place in this game")
  } else {
    console.log("Good game!")
  }
  for (let j = 0; j < highScore.length; j++) {
    console.log(highScore[j].name + ' score is : ' + highScore[j].oldScore);
  }
}

//player instructions about quiz
if (userName) {
  console.log(chalk.cyan.bold("Hello! " + userName + ". Welcome to Shinchan's World."));
  console.log(chalk.blue.bold("In this game for every correct takewer you get five points and for every wrong takewer you will loose three point."))
  console.log(chalk.bold.green("LETS GET STARTED!"))
  for (let i = 0; i < data.length; i++) {
    play(data[i].ask, data[i].take);
  }
  console.log(chalk.cyan("Hey " + chalk.bold(userName.toUpperCase()) + " your total score is: ", chalk.bold(score)));
  highScoreHandler();

} else {
  console.log("Please Enter Your Name!")
}

const input = readLineSync.question("Do you want to play again?");

//To play again.
if (input.toLowerCase() === "yes") {
  for (let i = 0; i < quiz.length; i++) {
    play(quiz[i].ask, quiz[i].take);
  }
}