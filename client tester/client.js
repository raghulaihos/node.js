let request = require('request');


let req = new Promise((resolve,reject)=>{
    request({
        url:`https://desolate-tundra-27521.herokuapp.com/name`,
        json : true
    }, (err,res,body)=>{
    if(err){
        reject("there has been an error!");
    }else{
       resolve(body);
    }
    });
})

req.then((suc)=>{
    console.log(suc);
},(err)=>{
    console.log("error:",err)
})

