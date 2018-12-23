let fs = require('fs');
let request = require('request');
let getRecipe = ()=>{
    setTimeout(()=>{
        let recipeID = [10,20,30,40];
        console.log(recipeID);
        setTimeout((id)=>{
            let recipe = {
                title:'fresh tomatoes',
                publisher: 'jonas'
            }
            console.log(`${id} : ${recipe.title}`);
        },1000, recipeID[2]);
       },1000);
}

getRecipe();


let getFile = ()=>{

    setTimeout(()=>{
        fs.readFile('input.txt', (err, res)=>{
            let fileName = res;
        });
        setTimeout(()=>{
            request({
                url:'some url',
                json:true
            }, (err, res, body)=>{
                
            })
        },1000)
    }, 1000);

}