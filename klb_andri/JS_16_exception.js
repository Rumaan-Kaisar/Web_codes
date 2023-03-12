try{
    allert("This is typed bad!"); //notice "ällert" is incorrect spelling
}
catch(e){ // e for error 
    e = "This error occurred: \n" + e
    alert(e);
}

// Using throw
var Name_1 = prompt("Enter your name:");
try{
    var leng = Name_1.length; // Length of user input 
    if(leng >5) {
        throw "Long Name";
    } else if(leng < 5) { 
        throw "Short Name";
    } else {
        throw "5 letter name";
    }
}
catch(e){
    alert(e);
}