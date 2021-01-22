// https://github.com/tameemshahriar/assignment.js

// First Problem - kilometerToMeter

function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return "Please provide a positive value for kilometer."
    }
    else {
        var Meter = kilometer * 1000; // 1km = 1000m
        return Meter;
    }
}

// First Problem - kilometerToMeter solved


// Second Problem - budgetCalculator

function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
        return "Please provide a positive value for watch, phone and laptop. Items can not have a negetive value.";
    }
    else {
        var totalBudget = watch * 50 + phone * 100 + laptop * 500; // Watch price : 50, Phone price : 100 , laptop price : 500
        return totalBudget;
    }
}

// Second Problem - budgetCalculator solved


// Third Problem - hotelCost 

function hotelCost(Days) {
    var totalBill = 0;
    if (Days <= 0) {
        return "Days can not be a negative value.";
    }
    if (Days > 0) {
        if (Days >= 1 && Days <= 10) {
            var totalBill = 100 * Days; // Staying in for less then 10 days
        }
        else if (Days >= 11 && Days <= 20) {
            var totalBill = ((Days - 10) * 80 + 1000); // Staying in between 11-20 days
        }
        else {
            var totalBill = ((Days - 20) * 50 + 1800); //Staying in for more than 20 days
        }
    }
    return totalBill;
}

// Third Problem - hotelCost solved


// Fourth Problem - megaFriend 

function megaFriend(Names) {
    var stringLength = 0;
    var longest;
    if ( Names === undefined || Names.length == 0) {
        return "Friend names empty or does not exist."
    }
    for (var i = 0; i < Names.length; i++) {
        if (Names[i].length > stringLength) {  // check string length
            var stringLength = Names[i].length; // assign string length
            longest = Names[i]; // assign string name
        }
    }
    return longest;
}

// Fourth Problem - megaFriend solved

// Calling all the functions and checking the output results

var result = kilometerToMeter(5); // kilometerToMeter
console.log(result); // kilometerToMeter

var result = budgetCalculator(2, 6, 7); // budgetCalculator 
console.log(result); // budgetCalculator 

var result = hotelCost(11); //hotelCost
console.log(result); //hotelCost

var Names = ['Sazon','Nazmul','Opu', 'badhon', 'Rumon', 'Dipzolbhai', 'jalali kobutor']; // megaFriend 
var result = megaFriend(Names); // megaFriend 
console.log(result); // megaFriend 
