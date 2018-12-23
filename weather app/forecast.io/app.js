const weather = require("./weather");
weather.getWeather(12.9716,77.5946,(err, response)=>{
if(err){
    console.log(err);
}
else{
    console.log((response.temperature));
}
});

