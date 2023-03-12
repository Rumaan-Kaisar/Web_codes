var d = new Date();
document.write(d);
console.log(d.getDay());

// Using day string
var d = new Date();
var day = d.getDay();
var weeKDays = new Array ("Sunday", "Monday", "Tuesday", "Wednesday" , "Thursday", "Friday", "Saturday");
document.write(weeKDays[day]);
d.getDay(); //Returns current date
d.getDay(); //Returns week-day, 0=sunday
d.getFullYear(); //Returns 4-digit year
d.getTime(); //Returns time from midnight 1970, 1 Jan in milliseconds
d.getMonth(); //Returns Current Month, 0=Jan
d.getSeconds(); //Returns current seconds
d.getMinutes(); //Returns current minutes
d.getHours(); //Returns current hour


/* Ways to create Date() object */
new Date()
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date(milliseconds)
new Date(date string)
