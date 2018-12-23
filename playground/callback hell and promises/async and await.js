let getID = () =>{
    return new Promise((resolve, reject)=>{
        resolve([1,2,3,4]);
    });
}

let getRecipe = (id)=>{
    return new Promise((resolve, reject)=>{
        let rec = {name:"fresh tomatoes", id:0}
        resolve(`${id} : ${rec.name}`);
    })
}

let aFunc = async ()=>{
    let item1 = await getID();
    let item2 = await getRecipe(item1[0]);
    return item2;
}

aFunc().then((res)=>{
    console.log(res);
}).catch(e=>{
    console.log(e);
})

