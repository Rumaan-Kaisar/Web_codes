
// To actually execute AJAX takes some work. Typically, we put all of this inside of a function, so we don't have to write this out over and over again.
var ajax;
if(window.XMLHttpRequest) {
    // this is for IE 7+, Chrome, Safari and Firefox. 
    ajax = new XMLHttpRequest();
} else {
    // this is for IE 6 and IE 5.
    ajax = new ActiveXObject("Microsoft.XMLHTTP"); I
}

ajax.onreadystatechange=function(){
    if (ajax.readyState == 4 && ajax.status == 200) {
    // execute this section of code when the requested page has fully loaded
    // use ajax.responseText as the object that holds the page information
    document.getElementByld("myDiv").innerHTML = ajax.responseText;
}
ajax.open("GET","mypage.html",true); 
ajax.send();


// we can put most of this into a function and return the new XMLHttpRequest.
function newAjax(){
    var ajax;
    if(window.XMLHttpRequest) {
        // this is for IE 7+, Chrome, Safari and Firefox. 
        ajax = new XMLHttpRequest();
    } else {
        // this is for IE 6 and IE 5.
        ajax = new ActiveXObject("Microsoft.XMLHTTP"); I
    }
    return ajax; 
}
// We  use this with another function
function LoadMe() {
    var ajaxHandler = newAjax(); 
    ajaxHandler.onreadystatechange = function(){
        if (ajaxHandler.readyState==4 && ajaxHandler.status==200) {
            document.getElementById("loadMe").innerHTML = ajaxHandler.responseText;
        }
    }
    ajaxHandler.open("GET", "mypage.html", true); 
    ajaxHandler.send();
}




// Ajax example w3school
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
  }



//   Kalob: Ajax Response
var ajaxHandler = newAjax();
ajaxHandler.onreadystatechange = function() {
    // this is where we check our readyState and our status.
    if(ajaxHandler.readyState==4 && ajaxHandler.status==200) {
        // this means the file is done loading 
        alert(ajaxHandler.responseText)}
    }

ajaxHandler.open("POST", "mypage.html", true); 
ajaxHandler.send();

onreadystatechange = function() {}

// ready sates and status
ajaxHandler.onreadystatechange = function() {
    // this function will run 5 times because there are 5 readyState1s. 
    if(ajaxHandler.readyState==4 && ajaxHandler.status==200) {
        // this means we can use responseText because readyState==4 
        // this means the file was loaded successfully, because status=200 
        alert(ajaxHandler.responseText);
    document.getElementByld("myid").innerHTML = ajaxHandler.responseText;
    }
}