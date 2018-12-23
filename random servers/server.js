let express = require('express');
let fs = require('fs');
let bodyparser = require('body-parser');
let app = express();


app.use(bodyparser.json());
app.get('/filecontent', (req, res)=>{
    
   // res.send('hello');
    fs.readFile('./input.txt', (err, body)=>{
       res.status(200).send(body); 
    });

});

app.post('/data', (req,res)=>{
   let obj = req.body;
   fs.writeFile('output.txt', JSON.stringify(obj), (err)=>{
       res.status(400).send(err);
   })
   res.send(obj);
})

app.listen(3000, ()=>{
    console.log('started on port 3000');
});

