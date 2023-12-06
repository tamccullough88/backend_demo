const mongoose = require('mongoose')

const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: trusted,
    },
    age: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    favoriteColor: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model("Person", PersonSchema)