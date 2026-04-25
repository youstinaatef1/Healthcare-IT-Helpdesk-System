const express = require("express");
const router = express.Router();
const {addDepartment} = require("../controller/departmentController");
const authMiddleware = require("../Middleware/AuthMiddleware");

router.post("/adddep", authMiddleware, addDepartment);
module.exports = router;