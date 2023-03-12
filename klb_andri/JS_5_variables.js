var big = 0;
const grav_acc = 9.8;
if (grav_acc > 9.8){
    let to_space = true;
    return to_space;
} else{
    alert("You canot goto space");
}


/* Declaration rules */
var $Name = "My Nair.e"; // this works!
var Name_2 = "My Nair.e"; // this works!
var _Name = "My Nair.e"; // this works!
var 2Name = "My Nair.e"; // this does not work!
var #Name = "My Nair.e"; // this does not work!


// Example
var p = prompt("How old are you right now?"); 
if(p){
    p++;
    alert("You will be" + p + "next year!");
} else{
    alert("Sorry, you didn't put a number in");
}

