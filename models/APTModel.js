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
            default: Date.now
        }, 
        role: {
            type: String,
            required: true
        }, 
        salary: {
            type: Number,
            default: 10000
        }, 
        status: {
            type: String,
            required: true
        } 

    }
)

module.exports = mongoose.model("APTData", aptSchema)