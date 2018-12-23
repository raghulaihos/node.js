const express = require('express');

let app = express();

app.get("/", (req, res)=>{
    res.send("hello there!");
});

app.get("/users", (req,res)=>{
    res.status(200).send([
        {name:"raghu",
    age:24},
{
    name:"shreyas",
    age:24
}
    ])
});

app.listen(3000);

module.exports.app = app;