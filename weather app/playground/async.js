console.log("first statement");
setTimeout(callme,1000);
function callme(){
    console.log("inside callback")
}
console.log("second statement");