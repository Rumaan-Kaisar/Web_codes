/* 
    The switch statement is another control-flow statement that can replace multiple if statements.
    I find the syntax unwieldy and hard to remember, but it’s good to know about!
*/


const day = 2; 

switch (day) { 
    case 1:
            console.log("MONDAY!");
            break; 
    case 2:
            console.log("TUESDAY!");
            break; 
    case 3:
            console.log("WEDNESDAY");
            break; 
    case 4:
            console.log("THURSDAY");
            break;
    case 5:
            console.log("FRIDAY");
            break; 
    default:
        console.log("INVALID NUMBER!");
}



// If 'braek' is not used, "fall through" happens after meeting the case
const day = 2; 

switch (day) { 
    case 1:
            console.log("MONDAY!");
            // break; 
    case 2:
            console.log("TUESDAY!");
            // break; 
    case 3:
            console.log("WEDNESDAY");
            break; 
    case 4:
            console.log("THURSDAY");
            break;
    case 5:
            console.log("FRIDAY");
            break; 
    default:
        console.log("INVALID NUMBER!");
}