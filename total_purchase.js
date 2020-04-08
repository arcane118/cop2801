// Giovanni-Yves Mahoney
// Assignement 1
// 2018
// COP2801

/* Takes 5 items and then calculates and displays the subtotal of the sale,
the amount of sales tax, and the total. */
var item1 = 9.99;
var item2 = 5.99;
var item3 = .99;
var item4 = 59.50;
var item5 = .25;

var subtotal = (item1 + item2 + item3 + item4 + item5);
var salestax = (item1 + item2 + item3 + item4 +item5)*.07;
var total = subtotal + salestax;

console.log("Your subtotal is" + ' '+ subtotal.toFixed(2))
console.log("Your salestax is" + ' ' + salestax.toFixed(2))
console.log("Your total is" + ' ' + total.toFixed(2))
