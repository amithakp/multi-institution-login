var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name:'String',
    institution:'String',
    email:'String',           
    password:'String',
    role:'string'
})

mongoose.model('userLog',userSchema);
module.exports = mongoose.model('userLog')