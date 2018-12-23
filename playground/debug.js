
let func1 = (a, b, cb)=>{
    setTimeout(()=>{
        if(typeof a === 'number' && typeof b === 'number'){
            let sum = a+b;
            setTimeout((s)=>{
                return cb(undefined, a+b);
            },1000, sum)
           
        }
        cb(new Error('could not calculate!'));
    }, 1000
    );
}


func1(2, 'a', (err, res)=>{
    if(err){
        console.log(err);
    }
    else
    console.log('result is : ' ,res);
});

console.log(2);
console.log(3);

