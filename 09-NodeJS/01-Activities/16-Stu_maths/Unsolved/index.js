// TODO: Import `maths.js`
const imports = require('./maths.js')
const inpu1 = +process.argv[2]
const inpu2 = process.argv[3]
const inpu3 = +process.argv[4]
let total = 0

switch(inpu2){
   
case 'q*':
    console.log( imports.product(inpu1,inpu3));
    break;
case '+':
     console.log( imports.sum(inpu1,inpu3));
     break;
case '-':
     console.log( imports.difference(inpu1,inpu3));
     break;
case 'q/':
     console.log( imports.quotient(inpu1,inpu3));
     break;

}
function mainloop(){
    Process.stdin

}
// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`

// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
