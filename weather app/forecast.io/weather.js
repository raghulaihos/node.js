const request = require('request');

const getWeather = (lat,lng,callback)=>{
    request({
        url:`https://api.darksky.net/forecast/8db7ab0deb2536a6b863e8f8ae30fc3e/${lat},${lng}`,
        json:true
    }, (error,response,body)=>{
       if(error){
           callback("something went wrong!")
       }
       else if(response.statusCode==400){
           callback("unable to fetch weather")
       }
       else if(response.statusCode==200){
           callback(undefined,{
               temperature:body.currently.temperature
           })
       }
    });
}

module.exports= {
    getWeather
}