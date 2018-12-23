const request = require('supertest');
const app = require('./server').app;
const expect = require('expect');
it("should return hello there response", (done)=>{
    request(app)
    .get('/')
    .expect(200)
    .expect('hello there!')
    .end(done);
})

it("should have raghu in response body", (done)=>{
    request(app)
    .get('/users')
    .expect(200)
    .expect((res)=>{
        expect(res.body).toInclude({name:"raghu",age:24}).toBeA(Array);
    })
    .end(done);

});

