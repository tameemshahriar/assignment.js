function hotelCost (Days) {
    var element = 0;
    for (var i = 1; i < Days.length; i++) { 
        if ( Days[i].length > element ) {
            var element = Days[i].length;
        }
    }
    return element;
}


var result = hotelCost(5);
console.log(result);



