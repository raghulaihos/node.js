let pr1 = ()=>{
    return new Promise((resolve, reject)=>{
        resolve([1,2,3,4]);
    })
};

let pr2 = (id)=>{
    return new Promise((res,rej)=>{
        console.log("fetching id item:",id );
        res(id);
    })
}

pr1().then((suc)=>{
    console.log(suc);
    return pr2(suc[2]);
}).then(suc=>{
    console.log("fetched item", suc);
})
.catch((e)=>{
    console.log("error",e)
})