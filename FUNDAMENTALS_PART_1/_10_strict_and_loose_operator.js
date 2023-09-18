// Strict operator === and loose operator ==
let age = 12;
if (age == "12") {
  console.log(`The age is equal`); // the loose operator will allow the string to converted into the number and this can be done only by the loose operator
}

age = 13;

if (age === "13") {
  console.log(
    `This will not give the output because the strict operator will not convert the string into the number `
  );
}

let favourite = prompt(`Enter the favourite number `); // prompt is used to take the data from the user and it is always is in the string  form so we have to convert it explicity into the number by Number

if (favourite == 10) console.log(`the number is equal`);

let favourit = Number(prompt(`Enter the favourite number `));

if (favourit === 13) console.log(`the number is  because it is strict equal`);
