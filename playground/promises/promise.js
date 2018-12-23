const myPromise = new Promise((resolve,reject)=>{
reject("this is rej");
});

myPromise.then((succ)=>{
    console.log(succ);
},(err)=>{
console.log("error :",err);
})