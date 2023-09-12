// Open up the console to see this log
console.log("Your external JavaScript file is linked 🎉");
var sbbtn = document.querySelector("#generate");
let testbool = true;
console.log(testbool)
function form(){
    var fname = document.getElementById("funame").value;
    console.log(fname) 
    var nwnum = document.getElementById("num").value;
    console.log(nwnum)
    var funfct = document.getElementById("fnfct").value; 
    console.log(funfct)
}

function toggle(){
    testbool = !testbool;
    console.log(testbool)
}
sbbtn.addEventListener("click", form);