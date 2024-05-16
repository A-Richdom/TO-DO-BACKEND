const mongoose = require('mongoose')

const toDoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    about: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('todo', toDoSchema)
