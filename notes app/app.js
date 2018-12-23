console.log("starting app.js");

const _ = require('lodash');
const fs =  require('fs');
const os =  require('os');
const yargs = require('yargs');
const notes = require('./notes.js');

const argv = yargs.argv;
let ret;
const command = argv._[0];
debugger;
if(command==="add")
{ 
ret = notes.addNote(argv.title, argv.body);
if(ret != undefined){
    console.log(ret.title + " " + ret.body , "added");
}else{
    console.log("Error in adding note");
}
} 
else if(command=="remove"){
let success = notes.removeNote(argv.title);
if(success){
    console.log("note removed");
}
else{
    console.log("note not removed!");
}
}
else if(command =="getNote"){
   let success = notes.getNote(argv.title);
   if(success!=undefined){
       console.log(`title:${success.title} \n body:${success.body}`);
   }
   else{
       console.log("note not found");
   }
}
else if(command =="list"){
    let arr = notes.getAll();
    arr.forEach(cur => {
        console.log("title: ",cur.title);
        console.log("body: ",cur.body);
        console.log("--");
    });

}


