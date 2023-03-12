
/* split */

var myString = "The quick brown fox jumps over the lazy dog"; 
var AmSplit = myString.split(" "); 

document.write("Here is the array: <br />"); 

for(index in AmSplit) {
    document.write(AmSplit[index] + ", ");
}

split(seperator, limit);
// seperator, limit both are optional.
// If the separator is omitted, "split()" returned array will contain the whole string in index [0].
// If the separator is "", 'split("")' returned array will be an array of single characters


/* substr, substring & slice */
var myString = "I love this website!";
document.write(myString.substr(0, 7) + "The Complete Web Dev");


var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
// The result of res will be: Banana
