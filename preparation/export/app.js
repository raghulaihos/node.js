
let fs = require('fs');

let pr1 = ()=>{
    return new Promise((res, rej)=>{
        res([1,2,3]);
    });
}

let pr2 = (id)=>{
    return new Promise((res, rej)=>{
        res(`fetching with id: ${id}`);
    });
};


let funcAsync = async ()=>{
    let a = await pr1();
    let b = await pr2(a[2]);
    return b;
}

funcAsync().then(suc=>{
    console.log(suc);
}).catch(e=>{
    console.log(e);
})