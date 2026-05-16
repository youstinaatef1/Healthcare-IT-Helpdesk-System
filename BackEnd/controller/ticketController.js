const User = require("../models/User");
const Ticket = require("../models/Ticket");
const { ticketSchema, statusUpdateSchema } = require("./validation/ticketSchema");
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
        const ticket = await Ticket.create({ ...value, userId });
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
const updateTicketStatus = async (req, res) => {
  try {
    const { error, value } = statusUpdateSchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        msg: error.details.map((err) => err.message),
      });
    }

    const userRole = req.user.role;

    if (userRole !== "admin" && userRole !== "it") {
      return res.status(403).json({
        msg: "Access Denied: Only Admin or IT can update status",
      });
    }

    const ticket = await Ticket.findByIdAndUpdate(
      req.params.id,
      {
        status: value.status,
      },
      {
        new: true,
      }
    );

    if (!ticket) {
      return res.status(404).json({
        msg: "Ticket not found",
      });
    }

    res.status(200).json({
      msg: "Ticket status updated successfully",
      data: ticket,
    });
  } catch (error) {
    console.error(error);

    if (error.kind === "ObjectId") {
      return res.status(400).json({
        msg: "Invalid Ticket ID",
      });
    }

    res.status(500).json({
      msg: "Server Error",
    });
  }
};


const deleteTicket = async (req, res) => {
  try {
    const userRole = req.user.role;

    if (userRole !== "admin" && userRole !== "it") {
      return res.status(403).json({
        msg: "Access Denied: Only Admin or IT can delete tickets",
      });
    }

    const ticket = await Ticket.findByIdAndDelete(req.params.id);

    if (!ticket) {
      return res.status(404).json({
        msg: "Ticket not found",
      });
    }

    res.status(200).json({
      msg: "Ticket deleted successfully",
    });
  } catch (error) {
    console.error(error);

    if (error.kind === "ObjectId") {
      return res.status(400).json({
        msg: "Invalid Ticket ID",
      });
    }

    res.status(500).json({
      msg: "Server Error",
    });
  }
};
module.exports = {
    addTicket, 
    getAllTicket,
    getSingleTicket,
    updateTicketStatus,
    deleteTicket
};