const express = require("express");
const router = express.Router();
const {addTicket, getAllTicket, getSingleTicket} = require("../controller/ticketController");
const authMiddleware = require("../Middleware/AuthMiddleware");

router.post("/add", authMiddleware, addTicket);
router.get("/allTicket", authMiddleware, getAllTicket);
router.get("/tickets/:id", getSingleTicket);
module.exports = router;