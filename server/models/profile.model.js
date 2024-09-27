const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProfileSchema = new Schema(
    {
        name: {type: String,
        maxLength: 50},
        car: {}
    }
)