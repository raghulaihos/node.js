let request = require('request');

let obj = {
email: 'raghulaihos@gmail.com',
password:'hello123'
};

// request({
//     url:'http://localhost:3000',
//     json:true,

// }, (err, res, body)=>{
//     console.log(res)
// })

request.post({
    url:'http://localhost:4000/sendUser',
    json:true,
    body: obj
}, (err, res, body)=>{
    if(err){
      return console.log(err);
    }
    console.log(body);
})