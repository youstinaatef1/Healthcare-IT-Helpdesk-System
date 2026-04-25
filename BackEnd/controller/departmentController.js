const User = require("../models/User");
const Department = require("../models/Department");
const departmentSchema = require("./validation/departmentSchema");
const addDepartment = async(req, res) =>{
    try{
        const {error, value} = departmentSchema.validate(req.body,{
            abortEarly : false,
            stripUnknown: true
        });
        if(error){
            return res.status(400).json({
                msg: error.details.map((err) => err.message),
            });
        }
        // Get Data From req.body
        const{title} = value;
        const userId = req.user.id;
        // Create New Department
        const department = await Department.create(value);
        //Responce
        res.status(201).json({
            msg: "Done Create Department",
            data: department,
        });
    }
    catch(error){
        res.status(500).json({ msg: "Server Error" });

    }
}
module.exports = {addDepartment};
