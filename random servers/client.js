let request = require('request');

request.get({
    url:'http://localhost:3000/filecontent',
    json: true
}, (err, res, body)=>{
    console.log(body);
    console.log(res.statusCode);
});

request.post({
    url:'http://localhost:3000/data',
    body: {
        name:'raghu',
        age:24,
        company:'honeywell'
        },
    json: true
}, (err, res, body)=>{
    console.log(body);
});





