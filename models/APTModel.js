const mongoose = require("mongoose")

const aptSchema = new mongoose.Schema(
    { 
        companyName: {
            type: String,
            required: [true, "must provide CompanyName"],
            trim: true,
            maxLength: [20, "CompanyName can not be more than 20 characters"]
        }, 
        dateApplied: {
            type: String,
            required: true
        }, 
        role: {
            type: String,
            required: true
        }, 
        salary: {
            type: Number,
            required: true
        }, 
        status: {
            type: String,
            required: true
        } 

    }
)

module.exports = mongoose.model("APTData", aptSchema)