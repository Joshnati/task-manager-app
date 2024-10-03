const mongoose = require('mongoose') 

const TaskSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'please enter a name'],
        trim: true,
        maxlength: [20, 'name cannot exceed 20 characters'],
    },
    completed: {
        type: Boolean,
        default: false,
    }
})

const Task = mongoose.model('Task', TaskSchema)
module.exports = Task