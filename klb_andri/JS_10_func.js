function func_1(){
    alert("My name is NOT Frank Zappa");
}

/* Calling/invoking a function */
func_1();


function func_2(name1, name2){
    alert(name1 + "is the first name\n" + name2 + " is the second name");
}
func_2("Plaw", "Student");


// Handling parameter exceptions
function func_3(name1, name2){
    if (name1==undefined || name2==undefined) {
        var message = "Missing one parameter";
    } else{
        var message = (name1 + "is the first name\n" + name2 + " is the second name");
    }
    alert(message);
}
func_3("Plaw", "Student");


// Returning from a function
function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}

var x = myFunction(4, 3);   // Function is called, returned value will end up in x
alert(myFunction(4, 3));    // returned value will be aleretd
document.write(myFunction(4, 3));   // returned value will be written in Html, documnet
console.log(myFunction(4, 3));      // returned value will be console-logged


// Returning from a function
function myFunction(a, b) {
    return a * b;             // Function returns the product of a and b
    alert(a+b); // This never executes
}


// Returning different values
function NameOrAge(type, value){
    type = type.toLowerCase(); 
    if(type=="age"){
        return value + value; //  addition arithmetic; doubles your age.
    } else if(type=="name"){
        //to conjugate, create a new variable first.
        // Then return the variable
        var newString = "Your name is " + value;
        return newString;
    } else{
        // You can return full strings. Remember to escape quotes inside quotes, 
        return "Type did not match \"age\" or \"name\"";
    }
}