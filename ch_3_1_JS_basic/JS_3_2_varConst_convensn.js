/* 
-----------------|    Variables    |-----------------
    VARIABLES ARE LIKE LABELS FOR VALUES
    •	We can store a value and give it a name so that we can:
    •	Refer back to it later
    •	use that value to do...stuff
    •	Or change it later one

    Basic syntax:
        let varName = value;



-----------------|    shortghand assignment    |-----------------
    +=
    -+
    /+
    *=
    etc



-----------------|    Increment Decrement    |-----------------
        n++
        n--



-----------------|    CONST    |-----------------        
    'const' works just like 'let', except you 'CANNOT change' the value
    We can use "const" as not changeable values that remains same for all time.
        const hens = 4;	
        hens = 20;	// ERR
	
        const age = 17;	
        age = age + 1;	// ERR



-----------------|    VAR    |-----------------
THE OLD VARIABLE KEYWORD
THESE DAYS, THERE ISN'T REALLY A REASON TO USE IT.



-----------------|    Naming Convention   |-----------------
    meaningfull naming:
        numbers:
            count
            age

        Boolean:
            islogged
            isDone

    Use camelCase
*/



let num = 7;
let sum = num + 5;
num + 11;   // does not changes num's value



// -----------------|    Updating Variables    |-----------------
num = num + 11;     // now num's value is changed
num *= 56;


