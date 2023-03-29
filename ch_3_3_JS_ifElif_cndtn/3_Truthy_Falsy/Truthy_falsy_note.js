
/* 
    TRUTHY AND FALSY VALUES

        Falsy values:
            false
            0
            "" (empty string)
            null
            undefined
            NaN

        Everything else is truthy!
*/

const userInput = prompt("Enter something");

if (userInput) {
    console.log("TRUTHY!")
} else {
    console.log("FALSY!")
}

// if (0) {
//     console.log("TRUTHY")
// } else {
//     console.log("FALSY")
// }

// if (NaN) {
//     console.log("TRUTHY")
// } else {
//     console.log("FALSY")
// }

// if (undefined) {
//     console.log("TRUTHY")
// } else {
//     console.log("FALSY")
// }

// if (' ') {
//     console.log("TRUTHY")
// } else {
//     console.log("FALSY")
// }