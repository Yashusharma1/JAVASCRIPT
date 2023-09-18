'use strict';
// function calling other function

function fruitCut(a) {
  return 4 * a;
}

function foodProcessing(apple, orange) {
  const applePiece = fruitCut(2);
  const orangePeice = fruitCut(3);
  const food = `the juice is made up of the five ${apple} which is cut into the ${applePiece} piece and the there are ${orange} which is cut into ${orangePeice} pieces`;
  return food;
}

console.log(foodProcessing(4, 5));
