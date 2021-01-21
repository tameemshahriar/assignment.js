function megaFriend() {
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

//*    if( element <= 10 ) {
    var TotalBill = element * Bill;
}
}
*//

var result = hotelCost(5);
console.log(result);