const utils = require('./utils');
const expect = require('expect');

it('should add two numbers', ()=>{
    let res = utils.add(2,3);
    expect(res).toBe(5);
});

it('should square a num', ()=>{
    let res = utils.square(2);
    expect(res).toBe(4);
})

it('should async add two nos', (done)=>{
    utils.asyncAdd(2,3, (res)=>{
        expect(res).toBe(5);
        done();
    })
})

