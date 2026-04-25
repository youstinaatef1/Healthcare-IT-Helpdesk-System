const Joi = require("joi");
const departmentSchema = Joi.object({
    title: Joi.string().valid("ER","ICU","Labs").default("ER")
});
module.exports = departmentSchema