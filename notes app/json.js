const fs = require('fs');


let obj = {
    name:"raghu",
    age:24,
    address:"JP Nagar",
    height:"5'10''"
};

let objString = JSON.stringify(obj);

console.log("writing");
fs.writeFileSync("writeNote.json",objString);
console.log("reading");
let myReadString = fs.readFileSync("./writeNote.json");
let myObj = JSON.parse(myReadString);

console.log(myObj);