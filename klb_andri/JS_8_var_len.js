var alphabet = "uydgb aiufhpewoifn 0";
var age = 22;
var ExactAge = 22.989080;
console.log("String.length :"+alphabet.length+"\n Int.length :"+age.length+"\n float.length : "+ExactAge.length);

alphabet.toUpperCase();
"Monday Is NOT good".toLowerCase();

/* Comparing strings */
var p = prompt("What is the password?", "");
if(p.toLowerCase()=="password" && p.length==8) { 
    alert("Access granted!");
    } else {
    alert(p.toUpperCase() + " is wrong!");
    }