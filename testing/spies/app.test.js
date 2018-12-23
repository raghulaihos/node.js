let expect = require('expect');

describe('App', ()=>{
    it('should call the spy correctly', ()=>{
       let spy = expect.createSpy();
       spy('raghu', 24);
       expect(spy).toHaveBeenCalledWith('raghu',24);
    })
})