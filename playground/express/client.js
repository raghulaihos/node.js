let request = require('request');

request({
    url:'http://localhost:4000/employee/1/raghu?name=raghu&id=10',
    json:true
}, (err, res, body)=>{
    console.log('body :' , body);    
    console.log('response : ', res);
});

let obj = {
    carName: 'figo',
    manufacturer: 'ford',
    price : '4 Lakhs'
}
let emp = {
    name: 'raghu',
    age: 24,
    company: 'thought focus!'
}
// request.post({
//     url:'http://localhost:4000/stuff',
//     body: obj,
//     json:true
// }, (err, res, body)=>{
//     console.log(body);
// });

// request.delete({
//     url:'http://localhost:4000/employee',
//     json:true
// }, (err, res, body)=>{
//     console.log('deleted employee:', body);
// })

// request.patch({
//     url:'http://localhost:4000/employee',
//     json:true,
//     body : emp
// }, (err, res, body)=>{
//     console.log('modified employee:', body);
// })
