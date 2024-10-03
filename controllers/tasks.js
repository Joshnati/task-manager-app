const Task = require('../models/tasks');

const getALLTasks = (req, res) => {
    res.send('All Tasks')
}


const getTasks = (req, res) => {
    res.send('A Task')
}


const createTask = async (req, res) =>{
    try {
        const task = await Task.create(req.body)
        res.status(200).json({task})
    } catch (err) {
        res.status(400).json({error: err.message});
        
    }
}

const updateTask = (req, res) => {
    res.send( 'Update Task')
}


const deleteTask = (req, res) => {
    res.send('delete task')
}


module.exports = {
    getALLTasks,
    getTasks,
    createTask,
    updateTask,
    deleteTask
}