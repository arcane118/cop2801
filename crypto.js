// Giovanni-Yves Mahoney
// Assignement 2
// 2018
// COP2801

//This program encrypts passwords and displays them to the user.
var password = "Pizza2Day!";

/* This is the secret code that encrypts the passwords. One value gets
associated with another */
var Code = {
  "a":"m",
  "b":"h",
  "c":"t",
  "d":"f",
  "e":"g",
  "f":"k",
  "g":"b",
  "h":"p",
  "i":"j",
  "j":"w",
  "k":"e",
  "l":"r",
  "m":"q",
  "n":"s",
  "o":"l",
  "p":"n",
  "q":"i",
  "r":"u",
  "s":"o",
  "t":"x",
  "u":"z",
  "v":"y",
  "w":"v",
  "x":"d",
  "y":"c",
  "z":"a",
  "A":"M",
  "B":"H",
  "C":"T",
  "D":"F",
  "E":"G",
  "F":"K",
  "G":"B",
  "H":"P",
  "I":"J",
  "J":"W",
  "K":"E",
  "L":"R",
  "M":"Q",
  "N":"S",
  "O":"L",
  "P":"N",
  "Q":"I",
  "R":"U",
  "S":"O",
  "T":"X",
  "U":"Z",
  "V":"Y",
  "W":"V",
  "X":"D",
  "Y":"C",
  "Z":"A",
  "1":"1",
  "2":"2",
  "3":"3",
  "4":"4",
  "5":"5",
  "6":"6",
  "7":"7",
  "8":"8",
  "9":"9",
  "!":"!",
  "?":"?",
  "_":"_"
};

// Variable x is created so we can increment the position of the array easily
var x = 0;
var encrptPass = "";
/* This loop will take each value of the x position of the password and
associate it with the corresponding value in the Code array */
for (i = 0; i < password.length; i++) {
  var encrypValue = Code[password[x]];
  x += 1;
  encrptPass += encrypValue;
};
//Series of display statements
console.log("Password: " + password);
console.log("Encypting...");
console.log("Encryped Password: " + encrptPass);
