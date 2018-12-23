let getID = ()=>{
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
    resolve([10,20,30,40]);
   },1000);
});}


let getRecipe = (ID) =>{
    return new Promise((resolve, reject)=>{
        setTimeout((id)=>{
            let recipe = {
                title: 'fresh tomato',
                publisher: 'jonas'
            };
            resolve(`${id} : ${recipe.title}`);
        },1000, ID)
    });
}

getID()
.then((res)=>{
console.log(res);
return getRecipe(res[2]);
})
.then((res)=>{
    console.log(res);
})
.catch((e)=>{
    console.log(e);
})