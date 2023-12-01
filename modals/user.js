const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({

    FirstName: {
        type: String,
        required: true
    },
    SecName: {
        type: String,
        required: true
    }
})

exports.user = mongoose.model('user', userSchema,);