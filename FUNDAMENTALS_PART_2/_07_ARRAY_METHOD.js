// Array methods

//push - It is used to add the element at the last of the array

const fruit = ["apple", "banana", "Mango", "pomegranate"];
fruit.push("guava"); //since all these are function it means all these method also return the value we can find by saving the value into other variable and then print in the console section
console.log(fruit);

//unshift : It is used to add the element at the first of the array
// Both the push and unshift method will return the size of the array after the element is removed

fruit.unshift("grapes");
console.log(fruit);

// pop : This method is used to remove the last element of the array

fruit.pop();
console.log(fruit);

// shift : This method isusedto remove the first element of the array
// Both the pop and shift method will return the removed value
fruit.shift();
console.log(fruit);

// indexOf : this method is used to find the index of the element present in the array and if the element is not present it willl show -1
let a = fruit.indexOf("banana");
console.log(a);

// include : this method will return the boolean value
console.log(fruit.includes("banana"));
