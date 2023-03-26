
/* 
    -----------|   String Template Literals    |-----------
    Its more like Python's f-string.

    Template Literals
    TEMPLATE LITERALS are strings that allow embedded expressions, 
    which will be evaluated (as JS code) and then turned into a resulting string 

    LOL do not try it yet:
    we use 'BACK-TICKS ` ' not 'SINGLE QUOTES'
        `I am a template literal`

        o   The 'back-tick' key is usually above the "tab" key
    
    BACK-TICKS are also used to define STRINGS
        console.log(`String without " ' " or ' " ' `)
        notice no escape sequence \' or \" is needed

*/

console.log("I counted ${3+4} sheep");  // Not gonna work
console.log('I counted ${3+4} sheep');  // doesn't work either
console.log(`I counted ${3+4} sheep`);  // It WORKS!!!!

// BACK-TICKS are also used to define STRINGS
console.log(`String without " ' " or ' " ' `);



/* BACK-TICKS demo */
let product = "Artichoke";
let qty = 5;
let price = 10;

console.log("You bought " + qty + " " + product + ". Total is: " + price * qty );
// following is more simple
console.log(`You bought ${qty} ${product.toUpperCase()}. Total is: $${price * qty}`);