
/* RegExp object declaration */
var MyRegExp = new RegExp(pattern, modifiers);

// We can also use following version
var MyRegExp = /pattern/modifiers;


// Using String search() With a String
var str = "Visit W3Schools!";
var n = str.search("W3Schools");

// Using String search() With a Regular Expression
var str = "Visit W3Schools";
var n = str.search(/w3schools/i);



// Using String replace() With a String
var str = "Visit Microsoft!";
var res = str.replace("Microsoft", "W3Schools");

// Use String replace() With a Regular Expression
var str = "Visit Microsoft!";
var res = str.replace(/microsoft/i, "W3Schools");



/* Example Modifiers */
var myExp = /Rubinn/g;
var test = myExp.test("My name is Rubinn");
alert (test);

/* Example Modifiers & Quantifiers */
var myExp = /n{2}/g;
var test = myExp.test("My name is Rubinn");
alert (test);


/* Matchers */
var myExp = /Rubinn\n/g;
var tst =myExp.test("My name is Rubinn\n test");
alert(tst);


// Using different methods:
/* .test() If you want to test if your RegExp works*/
yourRegExp.test("your string");

/* replace */
// string.replace("string or RegExp", "replacement");
var myExp = /sentence/gi; 
var str = "Change this sentence";
document.getElementById("demo6").innerHTML = str.replace(myExp, "str");

/* match */
var myRegExp = /string/g;
var str = "This is my test string string string".match(myRegExp);
for(v in str) { 
    alert(str[v]); 
}
var matcs = str.length();
alert(matcs)