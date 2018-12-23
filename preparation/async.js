let pr1 = ()=>{
    return new Promise((res,rej)=>{
        res([10,2,3,4]);
    });
}

let pr2 = (id)=>{
    return new Promise((res,rej)=>{
        res(`found recipe ${id}`);
    })
}

let myFunc = async ()=>{
    let a = await pr1();
    let b = await pr2(a[2]);
    return b;
}

myFunc().then(suc=>{
    console.log(suc)
}).catch(e=>{
    console.log(e)
})