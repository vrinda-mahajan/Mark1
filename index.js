var quesList = [
  (quesOne = {
    question: "Where do i live? ",
    answer: "Udhampur",
  }),
  (quesTwo = {
    question: "What is my favourite food? ",
    answer: "Momo",
  }),
  (quesThree = {
    question: "What is my favourite color? ",
    answer: "Pink",
  }),
  (quesFour = {
    question: "Which is my favourite superhero? ",
    answer: "Batman",
  }),
  (quesfive = {
    question: "What is my hobby? ",
    answer: "Gardening",
  }),
];
var highScores = [
  {
    name: "Ruby",
    score: 5,
  },
  {
    name: "Diya",
    score: 4,
  },
];

var readlineSync = require("readline-sync");
var score = 0;
var username = readlineSync.question("What is your name? ");
console.log("Welcome", username, "to DO YOU KNOW Vrinda?");
function check(ques, ans) {
  var userAnswer = readlineSync.question(ques);
  if (userAnswer.toUpperCase() == ans.toUpperCase()) {
    console.log("Right!");
    score++;
  } else {
    console.log("Wrong!");
  }
  console.log("Current Score: ", score);
  console.log("--------------");
}
for (var i = 0; i < quesList.length; i++) {
  check(quesList[i].question, quesList[i].answer);
}
console.log("YAY! Your Score is: ", score);
console.log(
  " Check Out the high scores,if you should be there ping me and i will update it."
);
for (var i = 0; i < highScores.length; i++) {
  console.log(highScores[i].name, ":", highScores[i].score);
}
