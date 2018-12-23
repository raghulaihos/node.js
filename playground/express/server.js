let bodyParser = require('body-parser');
let express = require('express');

let app = express();

let obj = {
    name: 'raghu',
    age: 24,
    company: 'thought focus!'
}

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use((req,res,next)=>{
    obj.url = req.url;
    obj.method = req.method;
    next();
})

app.get('/employee', (req, res)=>{
    res.status(200).send(obj);
});

app.get('/employee/:id/:name', (req, res)=>{
    let query = req.query;
    let p = req.params;
    obj.params = p;
    obj.query = query;
    res.status(200).send(obj);
});

app.post('/stuff', (req, res)=>{
    console.log(req.body);
    res.status(200).send(req.body);
});

app.delete('/employee', (req, res)=>{
    res.send(JSON.stringify(obj));
});

app.patch('/employee', (req, res)=>{
    req.body.name = 'shanay';
    res.send(req.body);
});


app.listen(4000, ()=>{
    console.log('listening at port 4000');
});

