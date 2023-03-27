/* 
    -----------|    Comparison operators    |-----------
        >       // greater than 
        <       // less than
        >=      // greater than or equal to 
        <=      // less than or equal to 
        ==      // equality 
                    Checks for 'equality' of 'value', but not equality of 'type'.
                    It coerces both values to the same type and then compares them.
                        This can lead to some unexpected results! For example
                            1 == "1"            // True, but one is number and one is string
                            null == undefined   // True, but they are different
                            0 == false          // True, but they are different
        !=      // not equal
        ===     // strict equality: CHECKS FOR EQUALITY OF VALUE AND TYPE
                            1 === "1"            // False, 
                            null === undefined   // False, 
                            0 === false          // False, 
                Tips: In most comparison use '==='
                    
        !==     // strict non equality 

        can compare strings. 
        Just be careful, things get dicey when dealing with case, special characters, and accents!
        You Need to know (unicode or ASCII code
            'a' < 'b';  // true
            'A' < 'a'   // False: 'A' has smaller char-code (unicode or ASCII code) than 'a'


    -----------|    Showing/Printing massages    |-----------
    console.log
    alert()
    prompt(msg)    // used for user input
        parseInt(prompt(msg))   // converts users numerical inputs to int-type number
        parseInt("101ascASEFWDV")   // Extracts or finds the number from a string

    Note: Usual place to include JS file at the bottom of a <body> tag (occationally place in <head>)
*/

// =====================
// BASIC IF/ELSE
// =====================
let random = Math.random();
if (random < 0.5) {
    console.log("YOUR NUMBER IS LESS THAN 0.5!!!")
} else {
    console.log("YOUR NUMBER IS GREATER (OR EQUAL) THAN 0.5!!!")
}
console.log(random);

// =====================
// PROMPT EXAMPLE
// =====================

const dayOfWeek = prompt('ENTER A DAY').toLowerCase();

if (dayOfWeek === 'monday') {
    console.log("UGHHH I HATE MONDAYS!")
} else if (dayOfWeek === 'saturday') {
    console.log("YAY I LOVE SATURDAYS!")
} else if (dayOfWeek === 'friday') {
    console.log("FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!")
} else {
    console.log("MEH")
}



// =====================
// TICKET PRICE EXAMPLE
// =====================

// 0-5 - FREE
// 5 - 10 CHILD $10 
// 10 - 65 ADULT $20 
// 65+ SENIOR $10

const age = 890;

if (age < 5) {
    console.log("You are a baby.  You get in for free!")
} else if (age < 10) {
    console.log("You are a child.  You pay $10")
} else if (age < 65) {
    console.log("You are an adult. You pay $20")
} else {
    console.log("You are a senior. You pay $10")
}


// =====================
// NESTING CONDITIONALS
// =====================

const password = prompt("please enter a new password");

// Password must be 6+ characters
if (password.length >= 6) {
    // Password cannot include space
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password!");
    } else {
        console.log("Password cannot contain spaces!")
    }
} else {
    console.log("PASSWORD TOO SHORT! Must be 6+ characters")
}



