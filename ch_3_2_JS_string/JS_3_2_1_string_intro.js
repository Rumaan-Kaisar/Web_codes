/* 
    -----------------|    Primitive Types    |-----------------
    Encolse by  double or single quotes 
    Strings are indexed


    -----------------|    length    |-----------------
    gives the length of an array or string


    -----------------|    Concatenation    |-----------------
    we can concatenate strings


    -----------------|    Mixing    |-----------------
    Mixing numbers with string (concatenation), number also become string    


    -----------------|    String Methods    |-----------------
    use () to call a functiion immediately
    toUpperCase(): non destructive, original data untouched
    toLowerCase()

    trim(): remove any white space from "start" and "end"

    Chain multiple methods:
        str.trim().toUpperCase()

    indexOf('z'); indexOf('cat'): 
        -1 if not there, 
        returns index of starting character of given string,
        only first occarance

    slice(start, end): 
        returns string from starting index to (end-1), excluding end
        use -ve index to get from last

        replace(str1, str2);
            match a pattern str1 and replace the pattern with str2

*/

let animal = "hippo";
console.log(animal[2]);

console.log(animal.toUpperCase() + " and " + animal);

let name_1 = "   Charlie Brown    ";
trmName = name_1.trim();
console.log(trmName);

let slced = trmName.slice(0, 5);
// no need to use trmName.slice(-1, -5);
let lSt = trmName.slice(-5);    // last = -1 = 'n', and -5 = 'B', prints -1 to -5
console.log(lSt + " " + slced);

let newName = trmName.replace("Charlie", "King Charls");
console.log(name_1 + " will be " + newName);



