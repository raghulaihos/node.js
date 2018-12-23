const request = require('request');

let geocode = (lat , lng)=>{
return new Promise(
    (resolve,reject)=>{
 request({
    url:`https://api.darksky.net/forecast/8db7ab0deb2536a6b863e8f8ae30fc3e/${lat},${lng}`,
    json : true
}, (error, response, body)=>{
if(error){
    reject("could not find");
}else{
    resolve({
        temperature:body.currently.temperature
    })
}
})
})
}

geocode(12.9716,77.5946).then((location)=>{
    console.log(JSON.stringify(location));
},(err)=>{
    console.log("error",err);
})