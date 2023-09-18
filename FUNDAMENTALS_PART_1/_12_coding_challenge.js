/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

*/

let DolphinsScore1 = 96;
let DolphinsScore2 = 108;
let DolphinsScore3 = 89;

let averageDolphineScoreis = (96 + 108 + 89) / 3;

console.log(`The average score of the Dolphins is ${averageDolphineScoreis}`);

let koalasScore1 = 88;
let koalasScore2 = 91;
let koalasScore3 = 110;

let averageKoalasScoreis = (88 + 91 + 110) / 3;

console.log(`The average score of the koreals is ${averageKoalasScoreis}`);

if (
  averageDolphineScoreis >= 100 &&
  averageDolphineScoreis > averageKoalasScoreis
) {
  console.log(`The winner of the game is Dolphins`);
} else if (
  averageKoalasScoreis >= 100 &&
  averageKoalasScoreis > averageDolphineScoreis
) {
  console.log(`The winner of the game is korals`);
} else if (
  averageDolphineScoreis === averageKoalasScoreis &&
  averageDolphineScoreis >= 100 &&
  averageKoalasScoreis >= 100
) {
  console.log(`The match is draw so no team won the game`);
} else {
  console.log(`No one won the match`);
}

DolphinsScore1 = 97;
DolphinsScore2 = 112;
DolphinsScore3 = 101;

averageDolphineScoreis = (97 + 112 + 101) / 3;

console.log(`The average score of the Dolphins is ${averageDolphineScoreis}`);

koalasScore1 = 109;
koalasScore2 = 95;
koalasScore3 = 123;

averageKoalasScoreis = (109 + 95 + 123) / 3;

console.log(`The average score of the koreals is ${averageKoalasScoreis}`);

if (
  averageDolphineScoreis >= 100 &&
  averageDolphineScoreis > averageKoalasScoreis
) {
  console.log(`The winner of the game is Dolphins`);
} else if (
  averageKoalasScoreis >= 100 &&
  averageKoalasScoreis > averageDolphineScoreis
) {
  console.log(`The winner of the game is korals`);
} else if (
  averageDolphineScoreis === averageKoalasScoreis &&
  averageDolphineScoreis >= 100 &&
  averageKoalasScoreis >= 100
) {
  console.log(`The match is draw so no team won the game`);
} else {
  console.log(`No one won the match`);
}

DolphinsScore1 = 97;
DolphinsScore2 = 112;
DolphinsScore3 = 101;

averageDolphineScoreis = (97 + 112 + 101) / 3;

console.log(`The average score of the Dolphins is ${averageDolphineScoreis}`);

koalasScore1 = 109;
koalasScore2 = 95;
koalasScore3 = 106;

averageKoalasScoreis = (109 + 95 + 106) / 3;

console.log(`The average score of the koreals is ${averageKoalasScoreis}`);

if (
  averageDolphineScoreis >= 100 &&
  averageDolphineScoreis > averageKoalasScoreis
) {
  console.log(`The winner of the game is Dolphins`);
} else if (
  averageKoalasScoreis >= 100 &&
  averageKoalasScoreis > averageDolphineScoreis
) {
  console.log(`The winner of the game is korals`);
} else if (
  averageDolphineScoreis === averageKoalasScoreis &&
  averageDolphineScoreis >= 100 &&
  averageKoalasScoreis >= 100
) {
  console.log(`The match is draw so no team won the game`);
} else {
  console.log(`No one won the match`);
}
