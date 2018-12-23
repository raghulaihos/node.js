console.log("starting notes.js");
let fs = require('fs');
module.exports.age = 24;

let addNote = (title, body) => {
    let arr = fetchNotes();
    let notes = {
        title,
        body
    }
    let dups = arr.filter(cur=>cur.title==title);
    if(dups.length==0){
    arr.push(notes);
    saveNotes(arr);
    return notes;
    }
};

let fetchNotes = ()=> {
    try
    {  
          let prevData = fs.readFileSync("notes-data.json");
          arr = JSON.parse(prevData);
          return arr;
    }
    catch(e)
    {
    return [];
    }
};

let saveNotes = (arr)=>{
    fs.writeFileSync("notes-data.json",JSON.stringify(arr));
};

let removeNote = (title) =>{
 let fetchedArr = fetchNotes();
 let filteredArr = fetchedArr.filter(cur=> cur.title!== title);
 saveNotes(filteredArr);
 return fetchedArr.length !== filteredArr.length;
};

let getNote = (title)=>{
    let fetchedArr = fetchNotes();
    let myNote = fetchedArr.filter(cur => cur.title == title);
    if(myNote != undefined){
        return myNote[0];
    }
    
};

let getAll = ()=>{
    let arr = fetchNotes();
    return arr;
};

module.exports = {
    addNote,
    removeNote,
    getNote,
    getAll
}