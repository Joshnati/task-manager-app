const express = require('express');
const router = express.Router();
const { getALLTasks, getTasks, updateTask, createTask, deleteTask } = require('../controllers/tasks')



router.route('/').get(getALLTasks).post(createTask)
router.route('/:id').get(getTasks).patch(updateTask).delete(deleteTask)



// router.get('/',(req,res) => {
//     res.send('A particular task')
// })

// router.get('/:id',(req,res) => {
//     res.send('Get all Task')
// })

module.exports = router;