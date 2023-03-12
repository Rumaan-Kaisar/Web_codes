
// setInterval example of the 

function tIMe(){
    var d = new Date(); 
    var hour = d.getHours(); 
    var minute = d.getMinutes(); 
    var second = d.getSeconds(); 
    var str = hour +":"+ minute +":"+ second;
    document.getElementById("demo").innerHTML = str;
}

var initiate = setInterval(function(){tIMe()}, 1000);



// setTimeout Example: an alert will appear after 5 second delay
var delayedAlert = setTimeout(function(){alert("Delayed!");}, 5000)