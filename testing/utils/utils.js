module.exports.add = (a,b)=>{
return a+b;
}

module.exports.square = (a)=>a*a;

module.exports.setName = (user, fullName)=>{
    names = fullName.split(' ');
    user.firstName = names[0];
    user.secondName = names[1];
    return user;
}

module.exports.asyncAdd = (a,b,callback)=>{
    setTimeout(()=>{
        callback(a+b);
    },1000);
}