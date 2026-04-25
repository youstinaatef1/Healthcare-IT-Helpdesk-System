const express = require("express");
const router = express.Router();
const {addTicket} = require("../controller/ticketController");
const authMiddleware = require("../Middleware/AuthMiddleware");

router.post("/add", authMiddleware, addTicket);
module.exports = router;