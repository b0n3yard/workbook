function keydownAction() {
  // TODO: Complete keydown function
  document.querySelector("#status").innerHTML = "KEYDOWN Event";
  
  var code = event.key
  document.querySelector("#code").innerHTML = code;
}
function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
  var code = event.keyCode
  document.querySelector("#code").innerHTML = code;
}

document.addEventListener("keyup", keyupAction);
document.addEventListener("keydown", keydownAction);
// TODO: Add Event Listener for "keydown" event

