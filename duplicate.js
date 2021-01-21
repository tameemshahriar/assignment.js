var names = [3, 6, 4, 2, 7, 8, 3, 0, 2, 4, 3, 7, 7];
var uniqueName = [];

for ( var i = 0; i <names.length; i++) {
    var element = names[i];
    var index = uniqueName.indexOf(element);
    if (index == -1) {
        uniqueName.push (element);
    }
}

console.log(uniqueName);