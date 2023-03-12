
// This code assigns many values (Fiat, 500, white) to a variable named car:
var car = {
    type:"Fiat", 
    model:"500", 
    color:"white"
};

// Accessing Object Properties
// You can access object properties in two ways:

objectName.propertyName
car.color


objectName["propertyName"]
car[model]


// Object Methods: Objects can also have methods. Methods are actions that can be performed on objects.
// Methods are stored in properties as function definitions.
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
//   In a function definition, this refers to the "owner" of the function. In other words, this.firstName means the firstName property of this object.



// Accessing Object Methods: You access an object method with the following syntax:
objectName.methodName()

// Example
nAme = person.fullName();

// If you access a method without the () parentheses, it will return the function definition:
// Example
nAme_2 = person.fullName;


var MyWallet = {
    cards: {
        visa:   1,
        mastercard: 1,
        arnex:  0,
        debit:  1
    },
    cash: {
        Canadian:   1500,
        American:   2200.5,
        Euros:  "No use"
    },
    id: "Yes"
}

console.log(MyWallet.cash.Canadian);
// Changing object propertie value
MyWallet.cash.Canadian = 5000;
console.log(MyWallet.cash.Canadian);

MyWallet['cash']['American'] = 10000;
console.log(MyWallet.cash.American);

MyWallet['cash'].Euros= "Lost";
console.log(MyWallet.cash['Euros']);

/* Do not use "." with [] */
// Wrong: MyWallet['cash'].['American'] = 10000;

// Wrong: console.log(MyWallet.cash.['Euros']);