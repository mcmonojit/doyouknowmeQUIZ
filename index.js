const readlineSync = require('readline-sync');
const chalk = require('chalk');

var score=0,flag=0;

//Array containing the high scores
var highScores = [
  {
    name: "Maharaj",
    score: 3,
  },
  {
    name: "Raj",
    score: 3
  },
  {
    name: "Gulu",
    score: 2,
  },
]

//Array containing all the questions
var questions = [{
  question: " What is my full name ? ",
  answer: "Monojit Chakraborty",
},{
  question: " Which city is my hometown ? ",
  answer: "Kolkata",
}, {
  question: " Which one do I like, coffee or tea ? ",
  answer: "tea",
},
{
  question: " Which is my favourite tourist destination Switzerland or Shimla ? ",
  answer: "Shimla",
},
{
  question: " Do I have any siblings ? ",
  answer: "Yes",
}];


function start() {
  console.log(chalk.bold.bgRed(" Welcome to Do you know Monojit Quiz "));
  var userName = readlineSync.question(chalk.bold(" Enter your name please :  "));
  console.log(chalk.bold.red(`\n Welcome ${userName}.\n The aim of this quiz is to check how well you know Monojit. `));
  console.log(chalk.bold.bgWhite.red("\n>>> Let's proceed >>>"));
  startQuiz();
  inference(); 
}


function startQuiz() {
  for (var i=0; i<questions.length; i++) {
    check(questions[i].question, questions[i].answer,i)
  }
}


function check(question, answer,i) {
  var userAnswer = readlineSync.question(chalk.bold.yellowBright(`\n${question}`));

  if (userAnswer.toUpperCase() === answer.toUpperCase()) 
  {
    console.log(chalk.bold.green(" Correct answer! "));
    score = score + 1;
  }
  else {
    console.log(chalk.bold.red(" Wrong answer!"));
   if(i===0||i===1)
    {flag=1;}
  }
  console.log(chalk.bold.bgWhite.black(` Current score: ${score} `));
  console.log(chalk.bold.magentaBright("-----------------------"));
}



function inference() {
  if(flag===1){
    console.log(chalk.bold.yellow(`It seems you do not know Monojit. You scored : ${score}.`));
  }else if(score===4){
    console.log(chalk.bold.cyanBright(`It seems you are a close friend of Monojit.\nCongrats!! you scored : ${score}.`));
  }else{
    console.log(chalk.bold.red(`You have scored : ${score}.`));
  }

  newHighScore();

  console.log(chalk.bold("\nHere are the current leaderboards"));
  highScores.map(score => console.log(score.name, " : ", score.score));
  
}

function newHighScore()
{
  if(score>highScores[0].score||score>highScores[1].score||score>highScores[2].score)
    {
     console.log(chalk.bold.bgRed("\n Wow! You have made a new high score! \n Send me a screenshot and I'll update it. "));
    }
}


start();
