//require mongoose
const mongoose = require("mongoose");
const { type } = require("../controller/validation/ticketSchema");
const { required } = require("joi");
// create schema
const messageSchema = new mongoose.Schema({
   ticketId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ticket",
        required: true
    },
    sender:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message:{
        type: String,
        required: true,
        trim: true
    }
},{timestamps: true});
// create model
const Message = mongoose.model("Message", messageSchema);
// export 
module.exports = Message;