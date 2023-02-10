/* 
The slice() method returns selected elements in an array, as a new array.

The slice() method selects from a given start, up to a (not inclusive) given end. 

            array.slice(start, end)

start:	Optional. Start position. Default is 0. Negative numbers select from the end of the array.
end:	Optional. End position. Default is last element. 
        Negative numbers select from the end of the array.
*/

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3); //Orange,Lemon

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// -ve index: "Banana"=-5, "Orange"=-4, "Lemon"=-3, "Apple"=-2, "Mango" = -1;
const myBest = fruits.slice(-3, -1); 



// Get last element
let arry = [2, 4, 6, 8, 10, 12, 14, 16];
let lastElement = arry.slice(-1); //16