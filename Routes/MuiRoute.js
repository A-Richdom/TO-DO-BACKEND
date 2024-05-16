const express = require('express');
const {createMui, getAllMui, deleteMui} = require('../Controllers/MuiController');


const router = express.Router()

router.post('/create', createMui)
router.get('/getAll', getAllMui)
router.delete('/delete/:id', deleteMui)

module.exports = router

