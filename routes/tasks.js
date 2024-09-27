const express = require('express')
const { getALLTasks, getTask, updateTask, createTask, deleteTask } = require('../controllers/tasks')
const router = express.Router()


router.route('/').get(getALLTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)



// router.get('/',(req,res) => {
//     res.send('A particular task')
// })

// router.get('/:id',(req,res) => {
//     res.send('Get all Task')
// })

module.exports = router