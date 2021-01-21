var speech = "Hello , I want to go to Jannah by all means.";
var wordCount = 0;
for (var i = 0; i < speech.length; i++) {
    var char = speech[i];
    if(char == " ") {
        wordCount++;
    }
}
console.log(wordCount);