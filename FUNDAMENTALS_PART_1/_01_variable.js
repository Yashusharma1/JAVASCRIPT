// There are six type of primitive data types

// 1: Number       IT CONTAIN ALL THE TYPE OF THE INTEGER TYPE OF DATATYPE float as well
// 2: String       IT CONTAIN ALL THE TYPE WE USE IN JAVA LIKE String and Charcter
// 3: Boolean      USED FOR TRUE AND FALSE
//4: Undefined    WHEN WE DEFINED THE VARIABLE BUT HAS NOT INITAILED THE VALUE
// 5: Null         WHEN THE DATA IS EMPTY
// 6: BigInt       USED  FOR STORING LARGE VALUE OF THE INTEGER
// 7: Symbol       VALUE THAT ARE UNIQUE AND CANNOT BE CHANGE

let firstName = "Yashu";
let lastName = "Sharma";

// IN JAVASCRIPT WE DO NOT HAVE DO DEFINE THE ITS DATATYPE IT AUTOMATICALLY DETECTS IT

if (firstName == "Yashu") {
  console.log("The First Name Is Matches The Following name Yashu");
}

// Dynamic handling

let myNameIs = "Yashu";
console.log(myNameIs);

// so now if i change the content of the myNameIs then it will change along with its type

myNameIs = "ben";
console.log(myNameIs);

let iam = true;
console.log(typeof iam);

iam = "Hello";
console.log(typeof iam);

let nam;
console.log(nam);
console.log(typeof nam);

// There is one error in the javascript that is the it show object when we want to know the type of the data nulll

console.log(null);
console.log(typeof null); // IT will show that the type of the null is the object
