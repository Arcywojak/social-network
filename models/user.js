const mongoose = require('mongoose');

//Create schema
const UserSchema = new Schema({
    name: {
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    register_date:{
        type:Date,
        default:Date.now
    },
    image:{
        type:String,
        default:"NoImg.png"
    }
});

module.exports = User = mongoose.model('user', UserSchema)