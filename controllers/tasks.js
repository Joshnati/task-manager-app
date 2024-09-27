const getALLTasks = (req, res) => {
    res.send('All Tasks')
}
const getTask = (req, res) => {
    res.send('A Task')
}
const createTask = (req, res) => {
    res.send('createTask')
}
const updateTask = (req, res) => {
    res.send( 'Update Task')
}
const deleteTask = (req, res) => {
    res.send('deleteTask')
}


module.exports = {
    getALLTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}