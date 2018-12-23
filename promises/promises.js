// const somePromise = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         reject("didn't work!");
//       //  resolve('It worked!'); 
//     }, 2000);
// }); 


// somePromise.then((message)=>{
// console.log('success',message);
// }, (err)=>{
//     console.log('failure',err)
// });


let asyncAdd = (a,b)=>{
    return new Promise((resolve,reject)=>{
if(typeof a==="number" && typeof b==="number"){
    resolve(a+b);
}else{
    reject("not a number");
}
    }
    )};


    asyncAdd(10,'5').then((success)=>{
        console.log("sum is : ",success);
        return asyncAdd(success,10);
    }).then((res)=>{
        console.log("result is:", res)
    }).catch((e)=>{
        console.log(e);
    });