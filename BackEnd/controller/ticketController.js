const User = require("../models/User");
const Ticket = require("../models/Ticket");
const ticketSchema = require("./validation/ticketSchema");
const addTicket = async(req, res) =>{
    try{
        const {error, value} = ticketSchema.validate(req.body,{
            abortEarly : false,
            stripUnknown: true
        });
        if(error){
            return res.status(400).json({
                msg: error.details.map((err) => err.message),
            });
        }
        // Get Data From req.body
        const{department, subject, priority, status} = value;
        const userId = req.user.id;
        //check Admin Role
        const checkAdmin = await User.findById(userId);
        if (!checkAdmin) {
           return res.status(404).json({msg: "User Not Found"}); 
        }
         // Create New Ticket
        const ticket = await Ticket.create(value);
        //Responce
        res.status(201).json({
            msg: "Done Create Ticket",
            data: ticket,
        });
        //Check Role
        if (checkAdmin.role !== "admin") return res.json({msg: "Access Denied"});
       
    }
    catch(error){
        res.status(500).json({ msg: "Server Error" });

    }
}
const getAllTicket = async(req, res) =>{
    try {
        const userId = req.user.id;
        const ticket = await Ticket.find({userId: userId});
        res.json({
            data: ticket
        });
        
    } catch (error) {
        console.log(error);
    }
} 
const getSingleTicket = async(req, res) =>{
    try {
        const ticketId = req.params.id;
        const ticket = await Ticket.findById(ticketId);
        if(!ticket) {
            return res.status(404).json({
                message: "Ticket not found"
            });
        }
        res.json({
            data: ticket
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server error"
        });
    }
}

module.exports = {
    addTicket, 
    getAllTicket,
    getSingleTicket,
};