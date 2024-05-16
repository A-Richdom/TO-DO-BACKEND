const Mui = require('../Schemas/MuiSchema');
require('dotenv').config()

//POST MUI
const createMui = async(req, res) => {
    const {title, details, category} = req.body

    try {
        const response = await Mui.create({title, details, category})

        res.status(200).json(response)
    } 
    catch (error) {
        res.status(500).json({error: error.message})
    }
};

//GET MUI
const getAllMui = async(req, res) => {
    
    try {
        const response = await Mui.find()

        res.status(200).json(response)
    } 
    catch (error) {
        res.status(500).json({error: error.message})
    }
};

//DELETE  MUI
const deleteMui = async(req, res) => {

    try {
        const response = await Mui.findByIdAndDelete(req.params.id)

        res.status(200).json(response)
    } 
    catch (error) {
        res.status(500).json({error: error.message})
    }
};

module.exports = {createMui, getAllMui, deleteMui}