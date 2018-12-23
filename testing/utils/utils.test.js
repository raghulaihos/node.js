const utils = require('./utils');
const expect = require('expect');
it("should add two number",()=>{
    let results = utils.add(10,20);
    expect(results).toBe(30).toBeA('number');
    // if(results!=30)
    // throw new Error('vaule not correct!');
});

it("should square a number", ()=>{
    let ans = utils.square(10);
    expect(ans).toBe(100).toBeA('number');
    // if(ans!=100){
    //     throw new Error("supposed to be",100,"but got ",ans);
    // }
})

it("should verify first and last names are set", ()=>{
    let user = {};
    user.age = 24;
    user.location = "Bangalore!";
    user = utils.setName(user,"Raghu ram");
    expect(user).toInclude({
        firstName:"Raghu",
        secondName:"ram"
    })
})

it("it should async add two numbers", (done)=>{
    utils.asyncAdd(4,3,(sum)=>{
        expect(sum).toBe(7).toBeA("number");
        done();
    })
})