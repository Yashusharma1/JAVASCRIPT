// FIRST WE WILL CREATE AN OBJECT

const yashu = {
  firstName: 'yashu',
  lastName: 'Sharma',
  age: 21,
  friend: ['mradul', 'vishesh', 'harsh', 'yash'],
  hasDriverLicence: true,
  // calcAge : function(t)// HE
  // {
  //     return 2000- t;
  // },
  // const : q => 2000-q,

  // HERE WE CAN ONLY USE THE FUCTION EXPRESSION AND THE ARROW FUNCTION AS THE FUNCTION DECLARATIVE CANNOT BE USED

  // calcAge : function()// HE
  // {
  //     return 2000-this.age;
  // },
  // const : () => 2000-this.age,

  calcAge: function () //
  {
    yashu.a = 2000 - this.age; // this and yashu are same as both the point to the same object
    return this.a;
  },
  const: () => 2000 - this.age,
  // this will create the new key in the object pair

  summary: function () {
    return `${yashu.firstName} is a ${yashu['a']} and he driver liceence which is ${yashu.hasDriverLicence}`;
  },
};
// so the object can contain the all types of the data which include the function as the function also produces the value

console.log(yashu['firstName']);

console.log(yashu['calcAge'](45));

// NOW THERE ARE THE TWO AGE KEY PAIRS
// FIRST IS THE AGE AND OTHER IS THE CALCAGE
// NOW WE CAN USE THE AGE VALUE IN THE FUNCTION WITH THE HELP OF THE
// this METHOD WILL ALWAYS POINT TOWARDS THE OBHECT NAME
// WHICH IS YASHU

console.log(yashu.calcAge);

// now if we want to use the age then we have to use the calcage function again and again to deal with that we can s
// store the value of the calcage into the other pair
// by creating the new key

console.log(yashu.summary);
