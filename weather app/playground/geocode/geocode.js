const request = require('request');

let geoRequest = (location,callback) => {
    request({
        url : `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyC3tG1VPtiQfEa2VF8g3BBZcDSWjF6dSRI`,
        json : true
    }, (error, response, body) => {
     if(error){
        callback("error in connection!");
     }
    // else if(body.status ="ZERO_RESULTS"){
    //    callback("unable to find that address");
    //  }
     else {
         callback(undefined,{
             latitude:body.results[0].geometry.location.lat,
             longitude:body.results[0].geometry.location.lng
         })
     }
    
    })
} 

module.exports = {
    geoRequest
};
module.exports.alast= 10;