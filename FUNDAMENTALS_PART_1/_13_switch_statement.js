const day = "Monday";

switch (day) {
  case "Monday": // IT IS STRICT EQUALITY OPERATOR
    console.log(`The day is monday`);
    break;
  case "tuesday":
    console.log(`The day is tuesday`);
    break;
  case "wednesday":
    console.log(`The day is wednesday`);
    break;
  case "thrusday":
    console.log(`The day is thrusday`);
    break;
  case "friday":
    console.log(`The day is friday`);
    break;
  case "saturday":
    console.log(`The day is saturday`);
    break;
  default:
    console.log(`There is no day that u typed `);
  // default does not have a break statement
}

// example using  the if else statemetn

if (day === "Monday") {
  console.log(`plan course structure `);
} else if (day === "tuesday") {
  console.log(`prepare the video`);
} else if (day === "wednesday" || day === "thrushday") {
  console.log(`write code example`);
} else if (day === "friday") {
  console.log("enjoy the weekand");
} else if (day === "saturday") {
  console.log(`play games`);
} else {
  console.log(`the day is invalid`);
}
