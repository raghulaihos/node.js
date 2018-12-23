let express = require('express');
let {mongoose} = require('./db/mongoose');
let bodyparser = require('body-parser');
let {user} = require('./models/users');
let app = express();

app.use(bodyparser.json());

app.get('/users', (req, res)=>{
    let users =user.find({
        name:'Raghuram'
    }).then((suc)=>{
        res.send(suc);
    }, (e)=>{
        res.send(e);
    });
});

app.post('/sendUser', (req,res)=>{
  
    let myUser = new user({
        email:req.body.email,
        password: req.body.password
    });

    myUser.save().then((suc)=>{
        console.log('saved user: ', myUser);
        res.send(myUser);
    }, (err)=>{
        console.log('error in saving!');
        res.status(400).send(err);
    })
});


app.listen(4000, (err, suc)=>{
    if(err){
        return err;
    }
    console.log('listening on port 4000');
})