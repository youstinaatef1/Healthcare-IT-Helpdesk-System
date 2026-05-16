//require mongoose
const mongoose = require("mongoose");

// create schema
const ticketSchema = new mongoose.Schema({
    department:{
        type: String,
        required: true,
        trim: true
    },
    subject:{
        type: String,
        required: true,
        trim: true
    },
    priority:{
        type: String,
        enum: ["low", "High", "medium" , "critical"],
        default: "low"
    },
    status:{
        type: String,
        enum: ["InProgress", "Investigating", "Queued", "Resolved"],
        default: "InProgress"

    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},{timestamps: true});
// create model
const Ticket = mongoose.model("Ticket", ticketSchema);
// export 
module.exports = Ticket;