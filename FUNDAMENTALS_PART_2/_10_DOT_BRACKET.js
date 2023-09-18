"use strict";
// THE DOT AND THE BRACKET OPERATOR IS USED TO GET THE VALUE FROM THE OBJECT
// WITH THE HELP OF THE KEY PAIR

const description = {
  fistName: "yashu ", // KEY VALUE PAIR SHOULD HAVE TO BE WRITTEN IN THE FORMAT KEY : VALUE,
  lastName: "sharma",
  age: 23,
  class: "ten",
};

// WITH THE HELP OF THE DOT OPERATOR WE CAN DIRECTLY FIND THE VALUE BY JUST GIVING THE KEY SAME GOES FOR THE BRACKET

console.log(description.age);
const j = "Name";
console.log(description["fist" + j]);

// fist"+j er cannot use this format with the dot operator
// which will give it as undefinded

const prompt = require("prompt-sync")();
const a = prompt("choose something between the firstname,lastname,age,");
// THIS WILL GIVE THE UNDEFINED AS THE THE a IS NOT THE KEY IN THE DESCRIPTION

// HERE WE USED THE DOT AND BRACKER OPERATOR TO ADD THE KEY AND VALUE PAIR IN THE DESCRIPTION

description.player = "tennis";
description["play"] = "game";

console.log(description);

// challenge

const friend = {
  friendsList: 3,
  friendName: ["ben", "ten", "thousand"],
};

console.log(
  `yashu has ${friend["friendsList"]} whose names are ${friend.friendName} and his best friend is ${friend.friendName[1]}`
);
