//require mongoose
const mongoose = require("mongoose");
const { type } = require("../controller/validation/ticketSchema");
const { required } = require("joi");
// Schema
const departmentSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        enum: ["ER", "ICU", "Labs"],
        default: "ER"
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
        }
}, {timestamps:true});
// create model
const Department = mongoose.model("Department", departmentSchema);
// export
module.exports = Department;