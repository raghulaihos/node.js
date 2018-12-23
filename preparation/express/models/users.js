let mongoose = require('mongoose');

let user = mongoose.model('user', {

        email:{
            type: String,
            required: true,
            unique:true
        },
        password:{
            type: String,
            required:true
        },
        tokens : [{
            access:{
                type: String,
                required: true
            },
            token:{
                type:String,
                required:true
            }
        }]
})

module.exports = {
    user
}