// Giovanni-Yves Mahoney
// Assignement 3
// 2018
// COP2801

// Variables for the pre-set balance, payment rate, and interest rate.1
var balance = 1500.00
var rate = 0.02
var intRate = 0.015

//Displayed welcome message function
function displayWelcome() {
  console.log("This program will determine the time to pay off a credit card " +
  "and the interest paid based on the current balance, the interest rate, " +
  "and the monthly payments made.");
};

// Function that determines the minimum pay to start off with
function calculateMinimumPayment(balance, rate){
  var minimumPay = (balance * rate);
  console.log("Assuming a minimum payment of 2% of the balance ($20 min)");
  console.log("Your minimum payment would be $" + minimumPay.toFixed(2));
};

//Function that displays the payment table
function displayPayments(balance, rate, intRate){
  console.log("Year	 Balance 	Payment Number	 Interest Paid 	 Minimum Payment")
  //Variables for the current year, payment number, interest paid, etc.
  var year = 1
  var paymentNum = 0
  var intPaid = 0
  var rateLeft = 30
  // A while loop that runs until the balance hits zero
  while(balance > 1){
    paymentNum += 1
    // There is one payment a month, so for every 12 payments, the year increases
    if(paymentNum % 12 === 0){
      year += 1
    };
    interest = (intRate * balance);
    // Interest paid += rate of interest multiplied by the balance
    intPaid += (intRate * balance);
    /* If the minimum balance exceeds 20, it will charge that amount, but
    otherwise, it goes down to a minimum of $20 */
    if(rateLeft > 20){
      rateLeft = (rate * balance);
    } else {
      rateLeft = 20
    };
    balance -= (rateLeft - interest)
    // The last payment needs to be above 0.05, because ~19 is the last charge
    if(balance > 0.05){
      // Displays all of the variables created, to fixed decimal values.
      console.log(year + '\t  $' + balance.toFixed(2) + '\t\t' + paymentNum + '\t\t $' + intPaid.toFixed(2) + '\t\t $' + rateLeft.toFixed(2));
    } else {
      // The last payment, ~0.05, will be set to display "-"
      console.log(year + '\t  $' + "    -" + '\t\t' + paymentNum + '\t\t $' + intPaid.toFixed(2) + '\t\t $' + rateLeft.toFixed(2));
    }

  };
};

// All the functions run here
displayWelcome();
console.log("Balance on your credit card: " + balance + "\nInterest rate: 18");
calculateMinimumPayment(balance, rate);
displayPayments(balance, rate, intRate)
