const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode');

const argv = yargs.argv;
const addr = argv.address;
const enAddr = encodeURIComponent(addr);



geocode.geoRequest(enAddr,(err,result)=>{
    if(err){
        console.log(err);
    }
    else {
        console.log(JSON.stringify(result));
    }
});
