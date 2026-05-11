const Joi = require("joi");

const ticketSchema = Joi.object({
    department: Joi.string().min(3).max(50).required(),
    subject: Joi.string().min(3).max(50).required(),
    priority: Joi.string().valid("low","High","medium", "critical").default("low"),
    status: Joi.string().valid("InProgress", "Investigating", "Queued", "Resolved").default("InProgress")
});
const statusUpdateSchema = Joi.object({
    status: Joi.string().valid("InProgress", "Investigating", "Queued", "Resolved").required()
});
module.exports = ticketSchema