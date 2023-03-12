// For loop with increment
for (var i = 0; i<=5; i++ ){
    document.write("My Name is Khan");
    document.write(" Looped "+i+" Times <br>");
}

document.write("My Nmae is <strong>Khan</strong>");

// For in loop
var MyArray_2 = ["Bevvy", "Ben", "Richie", "Penny wise"];
for (nm in MyArray_2){
    // Returns the index number
    console.log(nm);
    console.log(MyArray_2[nm]);
}


// For of loop
let cars = ["BMW", "Volvo", "Mini"];
let text = "";

for (let x of cars) {
  text += x + "  ";
}


// For each loop
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value) {
  txt = txt + value + "<br>";
}
console.log(txt);


// While loop
while (condition) {
  // code block to be executed
}

i = 1;
text = '';
while (i < 10) {
  text += "The number is " + i;
  i++;
}
console.log(text);


var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 0;
var text = "";

while (cars[i]) {
  text += cars[i] + "<br>";
  i++;
}
console.log(text);


// Do While loop
do {
  // code block to be executed
}
while (condition);


i = 5;
text = '';
do {
  text += "The number is " + i;
  i++;
}
while (i < 10);
console.log(text);


// Break and Continue
text = '';
for (i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}
console.log(text);

text = '';
for (i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}
console.log(text);


// Label statement
text = '';
var cars = ["BMW", "Volvo", "Saab", "Ford"];
list: {
  text += cars[0] + "<br>";
  text += cars[1] + "<br>";
  break list;
  text += cars[2] + "<br>";
  text += cars[3] + "<br>";
}
document.write(text);

