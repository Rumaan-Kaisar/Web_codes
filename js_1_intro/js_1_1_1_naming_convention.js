/* 
variable/function:  camelCase
CLASS : PascalCase
*/
// good
var firstName = 'Robin';

// good
function getName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }

class SoftwareDeveloper {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

var me = new SoftwareDeveloper('Robin', 'Wieruch');