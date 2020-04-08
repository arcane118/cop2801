//Giovanni-Yves Mahoney
//Notebook of JS Processes, 2018

// Boolean testing and execution
var message = "Cigarettes and Chocolate Milk";
if (message === "Cigarettes and Chocolate Milk"){
  console.log("That's a pretty good song.");
}
// this prints Yeah. because message is True
if (message){
  console.log("Yeah.");
}

/* True is registered as a 1 to the computer
(0 being false) so it will console log 1 */
var num = Number(true);
console.log(num);
var num2 = Number(false);
console.log(num2);

// true because NaN is NaN
console.log(isNaN(NaN));
/*  false because NaN will display any numerical value as false
and thus is a test of whether or not a value is int or str */
console.log(isNaN(10));
//true because NaN will display any String value as true
console.log(isNaN("Candy"));

// will display 123 because it has parsed the int 123 from the value
console.log(parseInt("123.5blue"));
// will display 123.5 because it has parsed the float 123.5 from the value
console.log(parseFloat("123.5blue"));

//Objects are created using the new operator
var obj = new Object();
//will display {} because the obj is empty
console.log(obj)

var age1 = 29;
age1 = ++age1;
console.log(age1)
//will display original age + 1 (30)
var age2 = 29;
age2 = age2 + 1;
console.log(age2)
//will display original age + 1 but was done less efficiently (30)

// Will display true because of type conversion
var result1 = ("55" == 55);
console.log(result1);
// Will display false because one is a string and the other is an integer
var result2 = ("55" === 55);
console.log(result2);

// detects number of arguments
function howManyArgs() {
  console.log(arguments.length);
}

// will display 3 due to having 3 arguments
howManyArgs("hi", 17, "gia");

var password = 'Pizza2Day!';
var lenpass = password.length;
console.log(lenpass)

console.log("\n");

var namet = "Gia";
function sayHello(namet) {
   console.log("Hello " + namet);
}
sayHello(namet);


/* You must define the function as a variable and then pass the value
through that function again once the code is being executed */
pounds = 30;
var one = function(pounds) {
  console.log(pounds + 10);
}
one(pounds);

/* Primitive types of values: Undefined, Null, Boolean, Number, String
These can be directly changed and manipulated. */

/* Reference values: objects stored in memory, which are not permiited direct
access. JavaScript can't directly manipulate these values. */

/* Reference values are the only ones that can have properties and methods
such as follows */
var person = new Object();
person.name = "Gia";
person.greeting = "Hey, how are you " + person.name + "?";
console.log(person.greeting);

var forme = 5;
var foryou = forme;
var forme = 7;
console.log("\nis " + forme + " equal to " + foryou + "?");
console.log("...nope, because they are primitives\n")

var formeref = new Object();
var foryouref = formeref;
formeref.name = "Object";
console.log("\nis " + formeref.name + " equal to " + foryouref.name + "?");
console.log("...yes, because they are reference values\n")

/* instanceof Object will always return True for reference values
and false for primitive values */
console.log(formeref instanceof Object) //true for Reference
console.log(pounds instanceof Object) //false for Primitive


/* Arrays are ordered lists of data, but unlike most languages ECMAScript can
include multiple data types in one single array: so for example, [0] can hold
a string, [1] can hold a number, and [3] can hold an object */

/* In the constructor you can pass a count in order to establish the length
property of the array, or you can pass the items that will be included in the
array */
var encr1 = new Array(26);
var encr2 = new Array("a", "b", "c", "d");
console.log(encr1); //26 empty items
console.log(encr2); // array with only 4

//essentially "deleting" values: change the length of the Array

encr2.length = 2;
console.log(encr2); //it will now contain only a and b
encr2[2] = "3"; // adds another value
encr2.toString(); //changes it to string
console.log(encr2);

// Will sort the array in order
var data = [1,2,8,3,9];
console.log(data.sort());
