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