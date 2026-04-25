const express = require("express");
const router = express.Router();

const { register, login, logout } = require("../controller/authController");
const uploadProfileImage = require("../Middleware/uploadImage");

router.post("/register", uploadProfileImage, register);
router.post("/login", login);
router.get("/logout", logout);

module.exports = router;
