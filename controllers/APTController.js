const aptData = require("../models/APTModel")

const getAllData = async (req, res) => {
    const applications = await aptData.find({})
    res.status(200).json({applications})
}

const uploadData = async (req, res) => {

    const dataObj  = await aptData.create(req.body);
    
    res.status(201).json({dataObj})
}

const updateApplication = async (req, res) => {
    try {
    const id = req.query.id;
    
    const updatedObj  = await aptData.findByIdAndUpdate(id, req.body);
    if(!updatedObj) {
        return res.status(400).json({msg: "Application not found!!!"})
    }
    res.status(200).json({msg: "Application Updated Successfully!"})
    } catch (error) {
        res.status(500).json({msg: "Error deleting application"})
    }
}

const deleteApplication = async (req, res) => {
    try {
        const id = req.query.id;
        const application = await aptData.findByIdAndDelete(id);
        if(!application) {
            return res.status(400).json({msg: "Application not found!!!"})
        }
        res.status(200).json({msg: "Deleted Succesfully!"})
    } catch (error) {
        res.status(500).json({msg: "Error deleting application"})
    }
}

module.exports = {
    getAllData,
    uploadData,
    updateApplication,
    deleteApplication
}