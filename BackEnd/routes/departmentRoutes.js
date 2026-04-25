const express = require("express");
const router = express.Router();
const {addDepartment} = require("../controller/departmentController");
router.post("/adddep", addDepartment);
module.exports = router;