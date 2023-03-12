var EscapeMe = "The cow jumped over the moon!?"; 
document.write(escape(EscapeMe));
// deprecated — A legacy feature for browser compatibility
// param string — A string value

/* Unescape  */
var un_escape = "The%20cow%20jumped%20over%20the%20moon%21%3F";
console.log(unescape(un_escape));
// The cow jumped over the moon!?
