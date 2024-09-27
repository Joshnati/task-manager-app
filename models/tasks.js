const mongoose = require('mongoose') 

const TaskSchema = new mongoose.Schema({
    name:{
        type: string,
        required: [true, 'please enter a name'],
        trim: true,
        maxlength: [20 , 'name cannot exceed 20 characters'],
    },
    completed: {
        type:Boolean,
        default: false,
    }
})

const Task = mongoose.model('Task',TaskSchema)
module.export = {Task}