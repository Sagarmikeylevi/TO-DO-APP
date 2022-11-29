const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    desc: {
        type: String,
        required: true
    },
    cat: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})

const Task = mongoose.model('Task' , taskSchema);

module.exports = Task;