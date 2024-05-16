const ToDo = require('../Schemas/To-DoSchema');
const { resHandler } = require('../Utility/ResHandler');
require('dotenv').config()


//CREATE TO-DO
const createToDo = async(req, res) => {
    const {title, about} = req.body
    
    try {
        const response = await ToDo.create({title, about})

        // res.status(200).json(response)
        return resHandler({res, statusCode: 200, data: response})
    } 
    catch (error) {
        res.status(500).json(error)
    }
};

//GET ALL
const getAllToDo = async(req, res) => {

    try {
        const response = await ToDo.find()

        // res.status(200).json(response)
        return resHandler({ res, statusCode: 200, data: response })
    } 
    catch (error) {
        // res.status(500).json(error)
        return resHandler({ res, statusCode: 400, data: {error}})
    }
};

//GET SINGLE
const getSingleToDo = async(req, res) => {
    const {id} = req.params
    try {
        const response = await ToDo.findById(id)

        return resHandler({ res, statusCode: 200, data: response})
    } 
    catch (error) {
        
        return resHandler({ res, statusCode: 400, data: "INVALID ID"})
    }
};

//DELETE TO-DO
const deleteToDo = async(req, res) => {
    const {id} = req.params
    try {
        const response = await ToDo.findByIdAndDelete({ _id: id });

        // res.status(200).json("T0-DO DELETED")
        return resHandler({ res, statusCode: 200, data: response })
    } 
    catch (error) {
        
        return resHandler({ res, statusCode: 400, data: "INVALID ID"})
    }
};

//UPDATE TODO
const updateToDo = async(req, res) => {
    const {id} = req.params

    try {
        const response = await ToDo.findByIdAndUpdate(id, req.body, {
            new:true
        })
       
        return resHandler({ res, statusCode: 200, data: response })
    } 
    catch (error) {
        
        return resHandler({ res, statusCode: 400, data: 'INVALID ID'})
        
    }
};

module.exports = {
    createToDo, 
    getAllToDo, 
    getSingleToDo, 
    deleteToDo, 
    updateToDo
}

