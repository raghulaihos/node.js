let expect = require('expect');
let request = require('supertest');
let app = require('./app');

describe('add',()=>{
    it('should add two numbers', ()=>{
        let res = app.add(10,20);
        expect(res).toBe(30);
    });
});

describe('user names', ()=>{
    it('should set name', ()=>{
        let user={};
         let obj = app.setName(user, 'raghu ram');
        expect(obj).toEqual({
            firstName:'raghu',
            secondName:'ram'
        })
    })
});

describe('async add', ()=>{
    it('should async add two nos', (done)=>{
        app.asyncAdd(10,20, (res)=>{
            expect(res).toBe(30);
            done();
        })
    })
});

let server = app.server;
describe('API tests', ()=>{
    it('should verify return results', (done)=>{
        request(server)
        .get('/')
        .expect(200)
        .expect('hello from server!')
        .end(done);
    })
})