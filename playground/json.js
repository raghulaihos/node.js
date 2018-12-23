
let obj = {
    name: 'raghu',
    age: 24,
    company: 'thought focus!'
}
console.log(obj);

let sObj = JSON.stringify(obj);
console.log(sObj+ 'raghu');

let toObj = JSON.parse(sObj);
console.log('object: ', toObj);