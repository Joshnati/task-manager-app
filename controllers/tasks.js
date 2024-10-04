const Task = require('../models/tasks');


const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json(tasks); 
    } catch (err) {
        res.status(500).json({error: err.message });
    }
};

const getTasks = async (req, res) => {
    try {
        const {id:taskID} = req.params
        const task = await Task.findById({_id:taskID})
        if (!task) {
           return res.status(404).json({message: 'task not found'}) 
        }
        res.status(200).json({task})
    } catch (err) {
        res.status(400).json({error: err.message})
    }
};


const createTask = async (req, res) =>{
    try {
        const task = await Task.create(req.body)
        res.status(200).json({task})
    } catch (err) {
        res.status(400).json({error: err.message});
 
    }
}
const updateTask = async (req, res) => {
    try {
        const {id:taskID} = req.params
        const task = await Task.findByIdAndUpdate({_id:taskID}, req.body, {new: true,runValidators: true})
        if (!task) {
            return res.status(404).json({message: 'Task not found'})
        }
        res.status(200).json({task})
    } catch (err) {
        res.status(400).json({error: err.message})
    }
};


const deleteTask = async (req, res) => {
    try {
       const {id:taskID} = req.params
       const task = await Task.deleteOne({_id:taskID})
       if (!task) {
        return res.status(404).json({message: 'task not found'})
       } 
       res.status(200).json({task})
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

module.exports = {
    getAllTasks,
    getTasks,
    createTask,
    updateTask,
    deleteTask
}