//switch statement

// statement does not produce a value
// expression are the statement that produce a value

// ternary operator

// ternary operator are the expression so they can produce a value so we can
//  use them with the `` templete

const age = 19;

age >= 18
  ? console.log(`I can drink a wine`)
  : console.log(`I can only drink a water`);

const ben = age < 12 ? 'wine :' : 'water'; // since ternary operator is a operator and operator is a exprerssion so we use them in the `` and store them in the variable
console.log(`I can drink a ${ben}`);
console.log(`I can drink a ${age < 12 ? 'wine :' : 'water'}`); // as we have used here in this we used ternary operator in the `` because it allow expression and operator will give a expression
