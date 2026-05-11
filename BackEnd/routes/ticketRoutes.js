const express = require("express");
const router = express.Router();
const {addTicket, getAllTicket, getSingleTicket, updateTicketStatus, deleteTicket} = require("../controller/ticketController");
const authMiddleware = require("../Middleware/AuthMiddleware");

router.post("/add", authMiddleware, addTicket);
router.get("/allTicket", authMiddleware, getAllTicket);
router.get("/tickets/:id", getSingleTicket);
router.put("/:id/status", authMiddleware, updateTicketStatus);
router.delete("/:id", authMiddleware, deleteTicket);
module.exports = router;