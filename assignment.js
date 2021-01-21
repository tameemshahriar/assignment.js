//First Problem - kilometerToMeter 

function kilometerToMeter (kilometer) {
    var Meter = kilometer * 1000;
    return Meter;
}

var result = kilometerToMeter(450);
console.log(result);

//Second Problem - kilometerToMeter 
function budgetCalculator (watch,phone,laptop) {
    var sum = watch * 50 + phone * 100 + laptop * 500;
    return sum;
}
var result = budgetCalculator(2,4,5);
console.log(result);

//third Problem - hotelCost

function hotelCost (Days) {

    var totalBill = 0;

    for (var i = 1; i < Days; i++) {   
        if ( Days <= 10) {
            var totalBill = 100 * Days;
        }
        else if ( Days >= 11 && Days <= 20 ) {
            var totalBill = ((Days-10)*80 + 1000);
        }
        else {
            var totalBill = ((Days-20)*50 + 1800);
        }
    }
    return totalBill;   
}

var result = hotelCost(30);
console.log(result);


//fourth Problem - megaFriend
function megaFriend(arr) {
    var lgth = 0;
    var longest;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > lgth) {
            var lgth = arr[i].length;
            longest = arr[i];
        }
    }
    return longest;
}
var arr = ['Sazon','Nazmul','Opu', 'badhon', 'Rumon', 'Dipzolbhai'];
var result = megaFriend(arr);
console.log(result);
