const Department = require("../models/Department");
const departmentSchema = require("./validation/departmentSchema");

const addDepartment = async (req, res) => {
  try {
    //  Validation
    const { error, value } = departmentSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      return res.status(400).json({
        msg: error.details.map((err) => err.message),
      });
    }

    //  Authorization (Admin only)
    if (req.user.role !== "admin") {
      return res.status(403).json({
        msg: "Only admin can create departments",
      });
    }

    //  Extract data
    const { title } = value;

    //  Create department
    const department = await Department.create({
      title,
      createdBy: req.user.id,
    });

    //  Response
    res.status(201).json({
      msg: "Department created successfully",
      data: department,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: error.message || "Server Error",
    });
  }
};

module.exports = { addDepartment };