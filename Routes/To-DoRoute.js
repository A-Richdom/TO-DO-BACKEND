const express = require('express');
const { 
    createToDo, 
    getAllToDo, 
    getSingleToDo, 
    deleteToDo, 
    updateToDo 
} = require('../Controllers/To-DoController');



const router = express.Router();

router.post('/create', createToDo)
router.get('/getAll', getAllToDo)
router.get('/getSingle/:id', getSingleToDo)
router.delete('/delete/:id', deleteToDo)
router.patch('/update/:id', updateToDo)

module.exports = router