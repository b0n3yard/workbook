// WRITE YOUR CODE HERE
var sname = ['Sylvester','Jeremy','Alphonso ' ]
var running = true;
var count = 0;
for (let x = 0; x < sname.length; x++){
    console.log("welcome to class " + sname[x])
    
}
var testvar = sname[0];

sname.unshift("hi")
if (testvar != sname[0]){
    console.log("replaced")
}
