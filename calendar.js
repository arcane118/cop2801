// Giovanni-Yves Mahoney
// Assignement 2
// 2018
// COP2801

// This is a program which displays the calendar month of May 2012

/* Creates an array with all the dates of may and the newlines when a
week will begin */
var days = new Array(1, 2, 3, 4, 5, "\n" + 6, 7, 8, 9, 10, 11, 12, "\n" + 13, 14,
15, 16, 17, 18 , 19, "\n" + 20, 21, 22, 23, 24, 25, 26, "\n" + 27, 28, 29, 30, 31);

//Displays month
console.log("\t\tMay 2012")

/* Array created with all days of the week, and joining all of them together
with a tab separator */
var weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
var wdaysJoined = weekdays.join('\t');
console.log(wdaysJoined);

/* Same concept as the above, and then moving the start of the array to
Tuesday before displaying the days */
var daysJoined = days.join('\t');
console.log("\t" + "\t" + daysJoined);
