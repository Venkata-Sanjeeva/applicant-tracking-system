const aptData = require("../models/APTModel")

const getAllData = async (req, res) => {
    const applications = await aptData.find({})
    res.status(200).json({applications})
}

const uploadData = async (req, res) => {

    const dataObj  = await aptData.create(req.body);
    
    res.status(201).json({dataObj})
}

module.exports = {
    getAllData,
    uploadData
}