function machineOn(){
var cardInsert = window.confirm("Insert Your Card!");

if (cardInsert === true){
    start();
}

};


function start() {

    
var balance = 100.11;
 // this will need updating and putting into user object once basic functionality is working.

var pinNumber = 1111; // same with pin into user object

var counter = 3; // for pin attempts


function checkPin(){ // to allow 3 attempts otherwise goes back to machine on and alerts user that card retained.
    var pin = Number(prompt('Please input your pin to start'));
    if (pin === pinNumber){
        cashMachine();
    } else if (pin === ''){
        alert (`Sorry please enter a pin number!`);
        checkPin()
    } else if (counter > 1) {
        counter--;
        alert (`Sorry your pin was incorrect please try again \n You have ${counter} more attempts`);
        checkPin()
    } else {
        alert (`Sorry you entered your pin incorrectly too many times! \n We have retained your card for security. \n Please contact your nearest branch for help.`);
        machineOn();
    }
}


function cashMachine(){ // start screen ask user for service they want.
    var input = Number(prompt('Welcome to Steves Bank \n Where you might not get your money back! \n Please select: \n 1. View Balance \n 2. Withdraw \n 3. Exit'));
    if (input === 1) {
        seeBalance()
    } else if (input === 2) {
        makeWithdraw()
    } else if  (input === 3) {
        exit()
    } else {
        error()
    }
  
};

function seeBalance(){ // simple show balance and return to start
    var balanceDisplay = balance.toFixed(2); // needs to fixed here as need to show pence.
    alert(`Your Balance is £${balanceDisplay}`);
    console.log(balanceDisplay);
    cashMachine();
};

function makeWithdraw(){  // allow overdraft but once in -money stop making payments
    var withdraw = Number(prompt('How Much Would You Like To Withdraw? \n 1. £10 \n 2.£20 \n 3. £40 \n 4.£60 \n 5. £80 \n 6.£100 ')); // on version 2 make choice of £10, £20, £40, £50, £100.
if (balance < 0) {
    alert('Sorry You Are Overdrawn and can\'t take out any more money. Better get back to earning some £££');
    seeBalance()
} else{
    if (withdraw === 1) {
        balance = balance- 10;
        seeBalance()
    } else if (withdraw === 2) {
        balance =balance- 20;
        seeBalance()
    } else if  (withdraw === 3) {
        balance =balance- 40;
        seeBalance()
    } else if  (withdraw === 4) {
        balance =balance- 60;
        seeBalance()
    } else if  (withdraw === 5) {
        balance =balance- 80;
        seeBalance()
    }else if  (withdraw === 6) {
        balance = (balance- 100);
        seeBalance()
    } else {
        alert('Sorry Please Make a Valid Selection!')
        makeWithdraw();
    }};

};

function error(){ // error for home screen input v2 probabaly better for try, catch error handling.
    alert('Sorry Only Options 1, 2, or 3 are valid! Please try again');
    cashMachine();
};

function exit(){
    alert('GoodBye Thank you for using Steves Bank!');
    machineOn();;
};

checkPin();

};

machineOn();