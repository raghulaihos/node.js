let express = require('express');
let server = express();

server.get('/', (req, res)=>{
    res.send('hello from server!');
});

server.listen(3000);

let add = (a, b)=>{
    return (a+b);
}

let setName = (user, fullName)=>{
    names = fullName.split(' ');
    user.firstName = names[0];
    user.secondName = names[1];
    return user;
}

let asyncAdd = (a,b,callback)=>{
    setTimeout(()=>{
        callback(a+b);
    },1000);
}

module.exports = {
    add,
    setName,
    asyncAdd,
    server
}