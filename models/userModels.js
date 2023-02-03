const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    userName: {
        type: String
    },
    ipaddress: {
        type: String
    },
    role: {
        type: String,
        default: "user"
    }
}, {
    timestamps: true,
})

const user = mongoose.model('user', userSchema)

module.exports = user;