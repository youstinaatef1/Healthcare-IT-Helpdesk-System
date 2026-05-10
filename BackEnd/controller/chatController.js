const User = require("../models/User");
const Ticket = require("../models/Ticket");
const Message = require("../models/Message");
const sendMessage = async(req, res) => {
    try {
        const {ticketId, message} = req.body;
        // Check Ticket Exists
        const ticket = await Ticket.findById(ticketId);
        if(!ticket){
            return res.status(404).json({
                msg: "Ticket Not Found"
            });
        }
        // Get User Id
        const userId = req.user.id;
        // Create Message
        const newMessage = await Message.create({
            ticketId,
            sender: userId,
            message
        });
        // Response
        res.status(201).json({
            msg: "Message sent Successfully",
            data: newMessage
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Server Error"
        });
    }
}
const getMessage = async (req, res) => {
    try {
        // Get User Id 
        const userId = req.user.id;
        // Check User Exist
        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({
                msg: "User Not Found"
            });
        }
        // Check Role
        if(user.role !== "admin" && user.role !== "it"){
            return res.status(403).json({
                msg: "Access Denied"
            });
        }
        // Get Ticket Id
        const ticketId = req.params.ticketId;
        // Get Message
        const messages = await Message.find({
            ticketId: ticketId
        })
        .populate("sender", "name role")
        .sort({ createdAt: 1});
        // Response
        res.json({
            data: messages
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Server Error"
        });
    }
}
module.exports = {sendMessage, getMessage};