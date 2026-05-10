const express = require("express");
const router = express.Router();
const {sendMessage, getMessage} = require("../controller/chatController");
const authMiddleware = require("../Middleware/AuthMiddleware");
router.post("/addMessage", authMiddleware, sendMessage);
router.get("/getMessage/:ticketId", authMiddleware, getMessage);
module.exports =router;