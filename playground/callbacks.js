let fs = require('fs');

fs.readFile('input.txt', (err, res)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(res.toString());
    }
});

console.log('one');
console.log('two');


let func1 = ()=>{
    func2(2, 3 ,(res)=>{
        console.log(res);
    });
}

let func2 = (a, b , callback)=>{
    setTimeout(() => {
        callback(a+b);  
    }, 2000);   
}

func1();

console.log('three');
console.log('four');