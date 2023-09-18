"use strict";

// array

///  IN JAVASCRIPT THE ARRAY CAN CONTAIN THE VALUE OF MORE THAN 1 DATA TYPE BUT DOES NOT HAPPENS IN THE JAVA

// one way to declare the variable

const friend = ["yashu ", "harsh", "mradul"];

// Second way to declare the variable

const otherFriend = new Array("my", "name", "is", "yashu", 12, 88.4);
console.log(otherFriend);
console.log(friend[1]);

friend[1] = "bmw";
friend[2] = "ren";

console.log(friend[1]);

// IN JAVASCRIPT THE ARRAY CAN HOLD THE ANOTHER ARRAY

for (let i = 0; i <= friend.length; i++) {
  console.log(friend[i]);
}
