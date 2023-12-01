const mongoose = require('mongoose');
const { Schema } = mongoose;

const personalSchema = new Schema({

    FirstName: {
        type: String,
        required: true

    },
    SecondName: {
        type: String,
        required: true
    
    },
});

exports.personal = mongoose.model('personal', personalSchema);