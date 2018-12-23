let fs = require('fs');


let cBack = ()=>{
    setTimeout(() => {
        console.log("getting recipe ids");
        let recipeID = [10,20,30,40];
        setTimeout((id)=>{

            console.log("fetching recipe id : ", id);

        },1000, recipeID[2]);

    }, 1000);
}




let fileWrites = ()=>{

    setTimeout(() => {
        let res = fs.readFile('test.txt', (err,data)=>{
           if(err){
               return console.log(err);
           }
            console.log(data.toString());
           var d = data.toString();
           setTimeout((f) => {
            console.log("got the data: ",f);
    }, 1000,d);
        });
      
    }, 1000);

}

fileWrites();