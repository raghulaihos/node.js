let add = (a,b)=>{
    return a+b;
    }
    
let square = (a)=>{
    return a*a;
}

let asyncAdd = (a,b, callback)=>{
    setTimeout(()=>{
        callback(a+b);
    }, 1000)
}

    module.exports = {
        add,
        square,
        asyncAdd
    }